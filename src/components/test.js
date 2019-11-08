import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPrivate} from '../dux/privateReducer'

class test extends Component{
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount(){
        this.props.getPrivate()
    }


render(){
    console.log(this.props)
    console.log(this.props.privateReducer.text)
    const all = this.props.privateReducer.text
    console.log(all)
    
    return(
        <div>
            <p>p</p>
            {all ? ( <div>{all.map((e, i) => {
        return <div private_id >{e.title}</div> 
    })}</div>) : null}
            {/* <div>
                {por ? ( <div>{por}</div>): null}
            </div> */}
          
            
        </div>
    )
}
}
function mapStateToProps(state) {
    return{
        privateReducer: state.privateReducer
    }
}


export default connect(mapStateToProps, {getPrivate})(test)