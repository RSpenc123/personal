import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from "../../dux/userReducer"
import {Link} from 'react-router-dom'

class account extends Component{

    
    render(){
    //   console.log("props", this.props)
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
                    <p>Account</p>
                    <h1> Your user information</h1>
                </div>
                <div className = 'info'>
    <p className = "editI"> Edit your user information here! </p>
              
                  {/* <p className = "infooooo">your info</p> */}
                  <p>{this.props.User.username}</p>
                 
              
              
              
                <p>profile pic would be here</p>
                <button>edit</button>
               
                <p>password edit would be here</p>
                <button> edit</button>
               
                

            <div className = "PageManager">
                <p className = "Page">Page manager</p>
                <p> edit your page here!
                </p>
            </div>
            </div>
                </div>
            </div>




        )
    }
}






const mapStateToProps = reduxState => {
    console.log(reduxState)
    const {User} = reduxState.userReducer;
    console.log(User)
    return{
        User
    }
}


export default connect(mapStateToProps,{updateUser})(account)
// export default account