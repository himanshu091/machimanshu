import React, { Component } from 'react'
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AddMerchant from '../pages/AddMerchant';
import AddDelivery from '../pages/AddDelivery';
import AllOrders from '../pages/viewAllOrders';


export default class Navbar extends Component {
  componentDidMount() {
    const M = window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
        <Router>
      <div>
      <nav>
     <div class="nav-wrapper">
     <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
       <Link to="/Home" class="brand-logo"> 
       LOGO</Link>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li><Link to="/Home">HOME</Link></li>
         <li><Link to="/Login">LOGIN</Link></li>
         <li><Link to="/Signup">SIGNUP</Link></li>
       </ul>
     </div>
   </nav>
   <ul id="slide-out" class="sidenav">
     

     <li><Link className="sidenav-close" to="/Home">HOME</Link></li>
     <li><Link className="sidenav-close" to="/Login">LOGIN</Link></li>
     <li><Link className="sidenav-close" to="/Signup">SIGNUP</Link></li>
   </ul>
   <Switch>
          <Route path="/Login" exact>
            <Login/>
          </Route>
         
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
          <Route path="/Signup" exact>
            <Signup/>
          </Route>
          <Route path="/AddNewMerchantAgent" exact>
            <AddMerchant/>
          </Route>
          <Route path="/AddNewDeliveryAgent" exact>
            <AddDelivery/>
          </Route>
          <Route path="/AllOrders" exact>
            <AllOrders/>
          </Route>
        </Switch>
     </div>
     </Router>
    )
  }
}
