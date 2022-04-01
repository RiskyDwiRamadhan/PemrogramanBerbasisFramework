import './style.css';
import React, { Fragment } from 'react';
import atasan from './img/atasan.jpg';
import bolasepak from './img/bolasepak.jpg';
import bolavoli from './img/bolavoli.jpg';
import jaket from './img/jaket.jpg';
import sepatubola from './img/sepatubola.jpg';
import sepatulari from './img/sepatulari.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";

//tas
const product = [
    {id: 1, img: atasan, name: 'Baju Bola', price:'Rp. 70.000'},
    {id: 2, img: jaket, name: 'Jaket', price:'Rp. 80.000'},
    {id: 3, img: sepatubola, name: 'Sepatu Bola', price:'Rp. 120.000'},
    {id: 4, img: sepatulari, name: 'Sepatu Lari', price:'Rp. 170.000'},
    {id: 5, img: bolasepak, name: 'Bola Sepak', price:'Rp. 50.000'},
    {id: 6, img: bolavoli, name: 'Bola Voli', price:'Rp. 60.000'}
]

const Tugas = () =>{
    return(
        <Router>
            <div className='title'>
                <Navbar />
                <div className = 'header'>

                <AuthButton />
                    <Switch>
                        <Route exact path = '/home'><Home /></Route>
                        <Route path = '/login'><Login /></Route>
                        <PrivateRoute path = '/producs'><Products /></PrivateRoute>
                        <Route path = '/about'><About /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Navbar (){
    return(
        <nav >
            <h1>
                Sport Shop
            </h1>
            <ul className="header">
                <li>
                <Link to='/home'>Home</Link>
                </li>
                <li>
                <Link to='/producs'>Producs</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

function Home (){
    return(
        <div className = 'home'>
            <h1>Welcome to Sport Shop</h1>
        </div>
    );
}

function About (){
    return(
        <div>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Morbi augue tortor, laoreet et nulla et, venenatis tempor elit. 
  Nam quis nunc sapien. Integer gravida nisi eu erat semper eleifend. 
  Etiam ullamcorper metus non enim congue, et ornare nisi auctor. 
  Nullam at ullamcorper elit. Integer mattis vulputate pellentesque.</p>
          
        </div>
    );
}

function Products() {
    let { path, url } = useRouteMatch();
    return(
        <div>
            <h2>Home</h2>
            <div class="badan">
                <h2>Produk Baru</h2>
        
                {product.map(product=>(
                    <div class="list-produk"> 
                        <img src={product.img} alt="Jaket Parasut" />
                        <h4>{product.name}</h4>
                        <h5>{product.price}</h5>
            
                        <a class="tombol tombol-detail" href="#">Detail</a> 
                        <a class="tombol tombol-beli" href="#">Beli</a>
                    </div> 
                ))
                }
            </div>
        </div>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
    fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/home"} };
    return fakeAuth.isAuthenticated ? (
    <p>
        Welcome!{" "}
        <button className='button'
        onClick={() => {
        fakeAuth.signout(() => history.push(from));
        }}
        >
        Sign Out
        </button>
    </p>
    ) : (
    <p></p>
    );
}

function PrivateRoute({ children, ...rest}) {
    return(
        <Route
        {...rest}
        render = {({ location }) => 
        fakeAuth.isAuthenticated ? (
        children
    ) : (
        <Redirect
        to = {{
            pathname: "/login",
            state: {from: location}
        }}
    />
    )
    }
    />
    );
}

function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/home"} };
    let login = () => {
    fakeAuth.authenticate(() => {
        history.replace(from);
    });
    };

    return (
    <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button className = 'button' onClick = {login}>Log In</button>
    </div>
    );
}

export default Tugas;