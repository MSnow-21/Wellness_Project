import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Nutrition from "./pages/Nutrition";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Stats from './pages/Stats'
import Fitness from "./pages/Fitness";
import Landing from "./pages/Landing";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from './store';
import Footer from './components/Footer';

if(localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = './login';
  }
}

function App() {
  return localStorage.jwtToken ? (
    <div className = "App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = {['/']}> 
          <Homepage />
        </Route>
        <Route exact path = "/nutrition"> 
          <Nutrition />
        </Route>
        <Route exact path = "/fitness"> 
          <Fitness />
      </Route> 
      <Route exact path = "/stats"> 
          <Stats />
      </Route> 

      <Route exact path = "/journal"> 
          <Journal />
      </Route> 

      <Route exact path = "/contact"> 
          <Contact />
        </Route>
        <Route exact path = "/notfound"> 
          <NotFound />
        </Route> 
      </Switch>
      <Footer />
    </Router>  
    </div>
  ) : (
  <div>
    <Router>
      <Route exact path = '/'>
        <Landing />
      </Route>
    </Router>    
  </div>
  )
  
  }

export default App;