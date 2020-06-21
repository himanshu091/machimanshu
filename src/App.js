import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default class App extends Component {
  componentDidMount() {
    const M = window.M
    var instance = M.Carousel.init({
        fullWidth: true
      });
}
  render() {
    return (
      
       <div>
            <Navbar/>
             
            </div>
     
    )
  }
}
