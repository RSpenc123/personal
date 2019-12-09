import React from 'react';

import './App.css';
import Header from "./components/headerLogged out"
import {HashRouter} from "react-router-dom"
import routes from './routes'
import {Provider} from 'react-redux'
import store from './dux/store'


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <Header/>
      
    <div className="App">
      {routes}
      
      
    </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
