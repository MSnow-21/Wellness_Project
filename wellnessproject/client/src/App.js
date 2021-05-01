import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Nutrition from "./pages/Nutrition";
// import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Fitness from "./pages/Fitness";
import Landing from "./pages/Landing";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className = "App">
    <Router>

      <Navbar />

      <Switch>
      <Route exact path = '/'>
        <Landing />
      </Route>
      
      <Route exact path = "/home"> 
          <Homepage />
      </Route>

     <Route exact path = "/nutrition"> 
          <Nutrition />
      </Route>

      <Route exact path = "/fitness"> 
          <Fitness />
      </Route> 

      {/* <Route exact path = "/journal"> 
          <Journal />
      </Route> */}

      <Route exact path = "/contact"> 
          <Contact />
      </Route>

      <Route exact path = "/notfound"> 
          <NotFound />
      </Route> 

      
      </Switch>


    </Router>
      

    </div>
    </Provider>
  );
  
  }

export default App;