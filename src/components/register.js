import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../dux/userReducer'
class register extends Component{
    constructor(){
        super()
        this.state ={
            username: "",
            password: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    handleRegister = () => {
        axios.post('/auth/register', {username: this.state.username,
        password: this.state.password}).then(res => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.updateUser(res.data)
            this.props.history.push('/Account')
        })
    }
    

    render(){
        return(
            <div>
                <input
                value = {this.state.username}
                name = "username"
                onChange = {(e) => this.handleInput(e)}/>
                <input
                value = {this.state.password}
                name = "password"
                onChange = {(e) => this.handleInput(e)}/> 
             
                <button onClick={this.handleRegister}>Register</button> 
                
                
                 </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}
export default connect(null, mapDispatchToProps)(register)