import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from "../dux/userReducer"
import {Link} from 'react-router-dom'
import {getPublic} from '../dux/publicReducer'

class Uploads extends Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        this.props.getPublic()
    }
    
    render(){
        //   console.log("props", this.props)
        console.log(this.props)
    console.log(this.props.publicReducer.text)
    const all = this.props.publicReducer.text
    console.log(all)
            return(
              
                <div className = 'users'> 
                
                    {/* <div className = 'nav'>
                    <p>Search by Genre</p>
                    <button>Genre1</button>
                    <button>Genre2</button>
                    <button>Genre3</button>
                    <button>Genre4</button>
                    <button>Genre5</button>
                    <button>Genre6</button>
                    <button>Genre7</button>
                    </div> */}
                    <div className = 'usersContent'>
                   <div className = 'account'>
                        <p>Uploads</p>
                        <h1> Your Uploads</h1>
                    </div>
                    <div className = 'WorkII'>
                    {all ? ( <div className = "workpls">{all.map((e, i) => {
        return <div className = "uploadView"><div className = "imageSpace"><Link to={`Content/${e.id}`}> <button className = "uploadImage"><img className = "Image"src={"https://i.imgur.com/3rOnzvR.jpg"}/></button></Link>
        <div className = "uploadText"><b className="ee" public_id >{e.title}</b> <p>Author: {e.username} </p> <p>Genre: {e.genre}</p><p className = "uDesc">Description: {e.description}
        </p> </div></div></div>
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
            publicReducer: state.publicReducer
        }
    }

// export default connect(mapStateToProps,{updateUser})(account)


export default connect(mapStateToProps, {getPublic})(Uploads)