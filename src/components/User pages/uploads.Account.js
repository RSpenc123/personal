import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from "../../dux/userReducer"
import {Link} from 'react-router-dom'
import {getPublic} from '../../dux/publicReducer'
import {getPublicById} from '../../dux/publicReducer'
import {deletePublic} from '../../dux/publicReducer'

class Uploads extends Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        this.props.getPublicById(this.props.store.userReducer.User.id)
    }
    
    render(){
        //   console.log("props", this.props)
        console.log(this.props)
        console.log(this.props.store.userReducer.User.id)
    console.log(this.props.store.publicReducer.text)
    const all = this.props.store.publicReducer.text
    console.log(all)
            return(
              
                <div className = 'users'> 
                
                    <div className = 'nav'>
                    <p>nav options here</p>
                    <Link to="Account"><button className= "settings"> Account Settings</button></Link>
                <Link to="Work"><button className="iwork">your work</button></Link>
                <Link to="Uploads"><button className="iup"> you uploads</button></Link>
                    </div>
                    <div className = 'usersContent'>
                   <div className = 'account'>
                        <p>Uploads</p>
                        <h1> Your Uploads</h1>
                    </div>
                    <div className = 'WorkI'>
                    {all ? ( <div className = "workpls">{all.map((e, i) => {
        return <div className = "uploadItem"><Link to={`Update/${e.id}`}><button className = "uploadImage" ><img className = "editImage" src="https://image.flaticon.com/icons/svg/61/61456.svg"></img></button></Link>
        <b className="e" public_id >{e.title}</b><button onClick={() => deletePublic(e.id)}>X</button> </div>
    })}</div>) : null}
            </div>
                    {/* <div className = 'WorkI'>
                    <div className = "uploadItem">
                        <div className = "uploadImage"></div>
                        <div className = "uploadDesc">
                        
                        <button> I</button>
                        </div>
                        
                       
                    </div>
                </div> */}
                    </div>
                </div>
    
    
    
    
            )
        }
    }

    function mapStateToProps(state) {
        return{
            store: state
        }
    }

// export default connect(mapStateToProps,{updateUser})(account)


export default connect(mapStateToProps, {getPublicById, deletePublic})(Uploads)