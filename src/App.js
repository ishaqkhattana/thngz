import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Dashboard from "./container/dasboard/Dashboard";
import Admin from "./container/Admin/Admin";
import "./App.css";

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
