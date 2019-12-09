import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class homePage extends Component{
    render(){
        return(
            <main className = "seet"> 
            <div className = "everything">
               <div>
               <section className = "banner">
               <Link to='/Content/75'><img class="bottom" src="https://i.imgur.com/ixLLK0x.jpg"/></Link>
               <Link to='/Content/75'><img class="top" src="https://i.imgur.com/lWmCqPD.jpg"/></Link>
    </section>
    </div>
               
               <section className = "desc">
                   <h1>1</h1>
            <h3 className="descbox">make an account</h3>
            <h1>2</h1>
            <h3 className="descbox">create your own stories</h3>
            <h1>3</h1>
            <h3 className="descbox">upload them for all to see!</h3>
               </section>

               <section className = 'Worker'>
                   <p>Our top choices</p>
                    <section className = "itemHp">
                        <div className = "boxHp">
                        <Link to='/Content/69'><article className = "ImageHp"><img className = 'rr' src= "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"/> </article></Link>
                        <div>
                        <h2>The Potatoes Nightlife</h2>
                        <p> Genre: fiction, fantasy</p>
                        <p className = "DescHp">Description: Not all potatoes are out with the sun. Some experience a whole new world in the night.
                        </p>
                        
                        </div>
                        
                        </div>
                        
                       
                    </section>
                    <section className = "itemHp">
                        <div className = "boxHp">
                        <Link to='/Content/70'> <article className = "ImageHp"> <img className = 'rr' src="https://1.bp.blogspot.com/-uD2VHcj1w9U/WzJEVIsjUwI/AAAAAAAN_3A/bTsi7sTHBHY8G8KJFGCJP76eVasjvXzWQCLcBGAs/s1600/TW1237531.png"/></article></Link>
                        <div>
                        <h2>Potato Madness, the Legend of the Mysterious Potato</h2>
                        <p> Genre: fiction, fantasy</p>
                        <p className = "DescHp">Description: What a strange potato this is.
                        </p>
                        
                        </div>
                        
                        </div>
                        
                       
                    </section>
                    <section className = "itemHp">
                        <div className = "boxHp">
                        <Link to='/Content/71'><article className = "ImageHp"><img className = 'rr' src="https://earlycuyler.typepad.com/.a/6a0120a7fd2b63970b0133ecf0b6cd970b-pi"/> </article></Link>
                        <div>
                        <h2>Potato Revolution: Rise Against the Farmers</h2>
                        <p> Genre: fiction, fantasy</p>
                        <p className = "DescHp">Description: Over the years farmers have become much too complacent. The potatoes have finally become fed up with their place, and are ready to rise up!
                        </p>
                        
                        </div>
                        
                        </div>
                        
                       
                    </section>
                    <section className = "itemHp">
                        <div className = "boxHp">
                        <Link to='/Content/72'><article className = "ImageHp"> <img className = 'rr' src="https://a.wattpad.com/cover/190406065-352-k162066.jpg"/></article></Link>
                        <div>
                        <h2>The Good Potato</h2>
                        <p> Genre: fiction, fantasy</p>
                        <p className = "DescHp">Description: Such good, much wow
                        </p>
                        
                        </div>
                        
                        </div>
                        
                       
                    </section>
                    
                </section>

               
                
               </div>
                </main>
        )
    }
}
export default homePage