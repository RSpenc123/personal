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
            this.props.updateUser(res.data)
            this.props.history.push('/Account')
        })
        .catch(err=> console.log(err))
    }


    render(){
        console.log("props", this.props)
        return(
            <div className= 'header'> 
               <input
                value = {this.state.username}
                name = "username"
                onChange = {(e) => this.handleInput(e)}/>
                <input
                value = {this.state.password}
                name = "password"
                onChange = {(e) => this.handleInput(e)}/> 

                <button onClick={this.handleLogin}>login</button>
               <Link to='/Register'><button>register</button></Link>
               <Link to='/Header'><button>log out</button></Link>
               <Link to='/Account'><button>Account</button></Link>
               {/* <h1>{this.state.props.User}</h1> */}
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}


export default connect(null,mapDispatchToProps)(header)