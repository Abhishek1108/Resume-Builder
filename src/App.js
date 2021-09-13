 import "./Static/scss/app.scss";
// import "./App.css";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom"
import Login from "./Components/Login";
import Register from "./Components/Register";
import LandingPage from "./Components/LandingPage";
import GettingStarted from './Components/gettingStarted';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Education from './Components/Education';
import PrivateRoute from "./PrivateRoute/privateRoute";
import Finalize from "./Components/finalize";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <PrivateRoute path="/getting-started" exact component={GettingStarted}></PrivateRoute>
        <PrivateRoute path="/contact" exact component={Contact}></PrivateRoute>
        <PrivateRoute path="/education" exact component={Education}></PrivateRoute>
        <PrivateRoute path='/finalize' exact component={Finalize}></PrivateRoute>
        <Route path="/aboutUs" exact component={AboutUs}></Route>
        <Route path="/login" exact component={Login}></Route> 
        <Route path="/register" exact component={Register}></Route>
        
      </Switch> 

    </div>
  );
}

export default App;
