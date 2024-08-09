import React, { useState } from 'react';
import { Switch, Link, Route, useLocation } from 'react-router-dom';
import  HomePage  from '../screens/homePage';
import  ProductsPage  from '../screens/productsPage';
import  OrdersPage  from '../screens/ordersPage';
import  UserPage  from '../screens/userPage';
import  HelpPage  from '../screens/helpPage';
import  HomeNavbar  from './components/headrs/HomeNavbar';
import  OtherNavbar  from './components/headrs/OtherNavbar';
import  Footer  from './components/footer';
import Test from "../screens/Test";
import '../css/app.css';
import '../css/navbar.css';
import '../css/footer.css';
import { CartItem } from '../lib/types/search';
import useBasket from './hooks/useBasket';
function App() {
  const location = useLocation();

  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove } = useBasket();

  return (
  <>
  {location.pathname === "/" ? <HomeNavbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDeleteAll={onDeleteAll} onDelete={onDelete}/> : <OtherNavbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDeleteAll={onDeleteAll} onDelete={onDelete}/>}
  <Switch>
    <Route path="/products">
      <ProductsPage onAdd={onAdd} />
    </Route>
    <Route path="/orders">
      <OrdersPage />
    </Route>
    <Route path="/member-page">
      <UserPage />
    </Route>
    <Route path="/help">
      <HelpPage />
    </Route>
    <Route path="/">
      < HomePage />
    </Route>
  </Switch>
  <Footer />
</>
  );
}

export default App;
