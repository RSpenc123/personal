import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/homePage'
import Register from './components/register'
import Account from './components/User pages/User.Account'

import Edittor from './components/edittor'
import Uploads from './components/User pages/uploads.Account'
import Work from './components/User pages/work.Account'
import Test from './components/test'
import Edit from './components/editText'
import Update from './components/editUpload'
import Browser from './components/browser'
import Content from './components/content'

// const id = this.props.id
export default (
    
    <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route path = '/Register' component = {Register}/>
        <Route path = '/Account' component = {Account}/>
        
        <Route path = '/edittor' component = {Edittor}/>
        <Route path = '/Uploads' component = {Uploads}/>
        <Route path = '/Work' component = {Work}/>
        <Route path = '/Test' component = {Test}/>
        <Route path = '/Edit/:id' component = {Edit}/>
        <Route path = '/Update/:id' component = {Update}/>
        <Route path = '/Browser' component = {Browser}/>
        <Route path = '/Content/:id' component = {Content}/>
        


    </Switch>
)