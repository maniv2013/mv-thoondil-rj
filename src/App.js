import React from 'react';
import MainContainer from './containers/MainContainer/MainContainer';
import Stock from './containers/Stock/Stock';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Layout>
        <Switch>
          <Route path="/Stock" exact component={Stock} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/" exact  component={MainContainer} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
