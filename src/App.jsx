import React from "react";
import Nav from './components/navbar'
import Body from './components/body'
import Viewer from "./components/viewer";
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import ForgotPassword from "./components/forgot";
import '../src/index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function app() {


return (
  <BrowserRouter>
  <Routes>

    <Route exact path="/" element = {
      <div id="appId" className="app">
        <Nav/>
        <Body/>
      </div>
    }/>
      
    
    <Route path="/3d-viewer/:id" element = {
      <Viewer/>
    }/>

    <Route path="/login" element = {
      <LogIn/>
    }/>

    <Route path="/signup" element = {
      <SignUp/>
    }/>

    <Route path="/forgot-password" element = {
      <ForgotPassword/>
    }/>
      
    
  </Routes>
  </BrowserRouter>
)

}