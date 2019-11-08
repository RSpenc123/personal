import React from 'react';

import './App.css';
import Header from "./components/headerLogged out"
import {HashRouter} from "react-router-dom"
import routes from './routes'
import {Provider} from 'react-redux'
import store from './dux/store'
import Header2 from './components/header2'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <Header/>
      {/* <Header2/> */}
    <div className="App">
      {routes}
      
      
    </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
