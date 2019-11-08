import React, {Component} from 'react'
import axios from 'axios'

class homePage extends Component{
    render(){
        return(
            <div className = "seet"> 
               <div>
               <section className = "banner">
	<img class="bottom" src="https://placeimg.com/640/480/nature"/>
	<img class="top" src="https://placeimg.com/640/480/arch"/>
    </section>
    </div>
               <div className = "filler">
            <p className="descbox">a couple</p>
            <p className="descbox">small boxes</p>
            <p className="descbox">describing some shit</p>
               </div>
               <div className = "desc">
                   <h1>1</h1>
            <h3 className="descbox">make an account</h3>
            <h1>2</h1>
            <h3 className="descbox">create your own stories</h3>
            <h1>3</h1>
            <h3 className="descbox">upload them for all to see!</h3>
               </div>

               <div className = 'WorkI'>
                   <p>Our top choices</p>
                    <div className = "uploadItem">
                        <div className = "uploadImage"></div>
                        <div className = "uploadDesc">
                        <p>p</p>
                        <button> I</button>
                        </div>
                        
                       
                    </div>
                </div>

               <div>
this is where the footer will be when i make it.

               </div>
                
                
                
                </div>
        )
    }
}
export default homePage