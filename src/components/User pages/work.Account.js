import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from "../../dux/userReducer"
import {Link} from 'react-router-dom'
import {getPrivate} from '../../dux/privateReducer'
import {getPrivateId} from '../../dux/privateReducer'


class Work extends Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        this.props.getPrivate()
    }
    
    render(){
        //   console.log("props", this.props)
        console.log(this.props)
    console.log(this.props.privateReducer.text)
    const all = this.props.privateReducer.text
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
        return <div className = "uploadItem"><Link to={`/Edit/${e.id}`}><button className = "uploadImage">
        {console.log(e.id)}
         </button></Link><button> I</button><div className="e" private_id >{e.title}</div> </div>
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
            privateReducer: state.privateReducer
        }
    }

// export default connect(mapStateToProps,{updateUser})(account)


export default connect(mapStateToProps, {getPrivate})(Work)