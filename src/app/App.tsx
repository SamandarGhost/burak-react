import React from 'react';
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
function App() {
  const location = useLocation();
  console.log("location:", location);

  return (
  <>
  {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
  <Switch>
    <Route path="/products">
      <ProductsPage />
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
