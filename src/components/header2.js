import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../dux/userReducer'

class header2 extends Component{
    
    handleLogout = () => {
        axios.post('/auth/logout').then(res => {
            this.props.history.push('/')
        })
        .catch(err => console.log(this.props))
    }


    render(){
        console.log("props", this.props)
        return(
            <div> 
               <button onClick={this.handleLogout}>Log Out</button>
               <h1>{this.props.User.username}</h1>
                <h1>{this.props.User.id}</h1>
                <Link to='/edittor'><button>Write</button></Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {User} = reduxState.payload;
    console.log(User)
    return{
        User
    }
}


export default connect(mapStateToProps,{updateUser})(header2)