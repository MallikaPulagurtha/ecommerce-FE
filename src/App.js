import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import Landing from "./landing"
import Topbar from "./topbar"
import AdminLogin from "./adminlogin"
import AdminDesk from "./admindesk"
import Login from "./login"
import Register from "./register"
import Main from "./main"
import ViewProd from "./viewprod"
import Cart from "./cart"
import Order from "./order"

function App() {

  return (
    <>
      <Router>
        <Topbar></Topbar>
        <Switch>
          <Route path="/" exact="true"><Landing /></Route>
          <Route path="/adminlogin" exact="true"><AdminLogin /></Route>
          <Route path="/admindesk/:id" exact="true"><AdminDesk /></Route>
          <Route path="/login" exact="true"><Login /></Route>
          <Route path="/register" exact="true"><Register /></Route>
          <Route path="/main/:id" exact="true"><Main /></Route>
          <Route path="/main/viewprod/:id" exact="true"><ViewProd /></Route>
          <Route path="/cart/:id" exact="true"><Cart /></Route>
          <Route path="/order/:id" exact="true"><Order /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
