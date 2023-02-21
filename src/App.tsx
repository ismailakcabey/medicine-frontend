import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/auth/login';
import './reset.css'
import Register from './pages/auth/register';
import Phamarcy from './pages/phamarcy';
import PhamarcyDetail from './pages/phamarcy-detail';



class App extends Component {
  
  render(){
    
    return (
      <div id="content">
        <Routes>
      <Route path='/' element={<Phamarcy/>}/>
      <Route path='/phamarcy/:phamarcy_id' element={<PhamarcyDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      </div>
    );
  }
}

export default App;


