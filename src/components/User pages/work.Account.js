import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from "../../dux/userReducer"
import {Link} from 'react-router-dom'
import {getPrivate} from '../../dux/privateReducer'
import {getPrivateId} from '../../dux/privateReducer'
import {deletePrivate} from '../../dux/privateReducer'

 
class Work extends Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        this.props.getPrivate(this.props.store.userReducer.User.id)
    }
    
    render(){
        //   console.log("props", this.props)
        console.log(this.props)
    console.log(this.props.store.privateReducer.text)
    const all = this.props.store.privateReducer.text
    console.log(this.props.store.userReducer.User.id)
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
                        <p>Work</p>
                        <h1> Your Projects</h1>
                    </div>
                    <div className = 'WorkI'>
                    {all ? ( <div className = "workpls">{all.map((e, i) => {
        return <div className = "uploadItem"><Link to={`/Edit/${e.id}`}> <button className = "uploadImage">
        {console.log(e.id)}
        <img className = "editImage" src="https://image.flaticon.com/icons/svg/61/61456.svg" alt="Reeeee"></img>
         </button></Link> <div className = "yeah"><b className="e" private_id >{e.title}</b><button onClick ={() => deletePrivate(e.id)}  > X</button> </div></div>
    })}</div>) : null}
            </div>
                    {/* <div className = 'WorkI'>
                    <div className = "uploadItem">
                        <div className = "uploadImage"></div>
                        <div className = "uploadDesc">
                        
                        <button> I</button>
                        </div>
                        
                       <Link to={`/chatRoom/${this.props.obj.counselor_id}`}>
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


export default connect(mapStateToProps, {getPrivate, deletePrivate})(Work)