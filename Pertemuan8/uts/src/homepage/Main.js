import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Shop from "../component/ShopPost";
import Keranjang from "../component/KeranjangPost";
import Login from "../component/Profile";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Shop</h1>
          <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/keranjang">Keranjang</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              {/* <li><NavLink to="/login">Profile</NavLink></li> */}
          </ul>
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/shop" component={Shop}/>
              <Route path="/keranjang" component={Keranjang}/>
              <Route path="/about" component={About}/>
              {/* <Route path="/login" component={Login}/> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;