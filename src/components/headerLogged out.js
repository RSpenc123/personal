import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../dux/userReducer'

class header extends Component{
    constructor(){
        super ()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleLogin = () => {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password}).then(res=>{
            this.setState({
                username: "",
                password: ""
            })
            console.log(this.props)
            this.props.updateUser(res.data)
            // this.props.history.push('/Account')
            
        })
        .catch(err=> console.log(err))
    }
    handleLogout = () => {
        axios.post('/auth/logout').then(res => {
            // this.props.history.push('/')
        })
        .catch(err => console.log(this.props))
    }

    render(){
        console.log("props", this.props)
        console.log(this.props.User)
        return(
            <div className= 'header'> 
            <div className= 'pp'>
            <p className = "pDocs"> Potato Docs
            </p>
            <img className = "potato" src = "https://cdn.shopify.com/s/files/1/1017/2183/t/19/assets/live-preview-potato.png?3009"/></div>
            <Link to="/Browser"> <button className = "browse">browse</button></Link>

            {this.props.User.username ? (
                <div className = "loggedIn"> 
                <button className="acccount" onClick={this.handleLogout}>Log Out</button>
                {/* <p>{this.props.User.username}</p> */}
                <Link to='/'><button className="acccount">Home</button></Link>
                <Link to='/Work'><button className="acccount">Account</button></Link>
                 <Link to='/edittor'><button className="acccount">Write</button></Link>
             </div>
            ) : (

            <div>
               <input
                value = {this.state.username}
                name = "username"
                onChange = {(e) => this.handleInput(e)}
                className = "ret"/>
                <input
                value = {this.state.password}
                name = "password"
                onChange = {(e) => this.handleInput(e)}
                className = "ret"/> 
                

                <button className="acccount" onClick={this.handleLogin}>login</button>
                
               <Link to='/Register'><button className="acccount">register</button></Link>
               <Link to='/'><button className="acccount">Home</button></Link>
               
               {/* <Link to='/Account'><button className="acccount">Account</button></Link> */}
               
               </div>
            )}  
          </div> 
            
        )
    }
}
const mapStateToProps = reduxState => {
    console.log(reduxState)
    const {User} = reduxState.userReducer;
    console.log(User)
    console.log(reduxState.userReducer)
    return{
        User
    }
}
const mapDispatchToProps = {
    updateUser
}


export default connect(mapStateToProps,mapDispatchToProps)(header)