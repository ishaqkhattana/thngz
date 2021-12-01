import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Dashboard from "./container/dasboard/Dashboard";
import Admin from "./container/Admin/Admin";
import ProductPage from "./container/productPage/productPage";
import Checkout from "./container/checkout/Checkout";
import Step2 from "./container/checkout/form/Step2";
import Step3 from "./container/checkout/form/Step3";
import Cart from "./container/cart/Cart";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import "./App.css";
import OrderConfirmation from "./container/checkout/OrderConfirmation";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path ="/cart">
            <Cart />
          </Route>
          <Route path ="/checkout">
            <Checkout />
          </Route>
          <Route path ="/step2">
            <Step2 />
          </Route>
          <Route path ="/step3">
            <Step3 />
          </Route>
          <Route path ="/orderConfirmation">
            <OrderConfirmation />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
