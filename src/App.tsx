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
import PhamarcyCreate from './pages/phamarcyCreate';
import User from './pages/user';
import UserDetail from './pages/user-detail';
import Profile from './pages/profile';



class App extends Component {
  
  render(){
    
    return (
      <div id="content">
        <Routes>
      <Route path='/phamarcy' element={<Phamarcy/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/phamarcy/create' element={<PhamarcyCreate/>}/>
      <Route path='/phamarcy/:phamarcy_id' element={<PhamarcyDetail/>}/>
      <Route path='/users/:user_id' element={<UserDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    );
  }
}

export default App;


