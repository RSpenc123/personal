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
            <div className= 'header2'> 
            <p>Search for Stories</p>
            <Link to="Browser"> <button>browse</button></Link>
            <input></input>
              <button>Search</button>
              <button> Search by Genre</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}


export default connect(null,mapDispatchToProps)(header)