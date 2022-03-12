import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart';
import Details from './components/Details';
import Product from './components/Product';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
