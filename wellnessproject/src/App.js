import React from "react";
// We are getting our router tools from react-router-dom
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Test1 from './components/pages/Test1';
import Test2 from './components/pages/Test2';
function App() {
  return (
    <div className="App">
      {/* We are setting up our router, and defining different routes to render our page depending on the websites url.*/}
      <Router>
        <Nav />
        <Switch>
          {/* To add more routes, simply follow the syntax within the switch statement.*/}
            <Route exact path={['/', '/test1']}>
              <Test1 />
            </Route>
            <Route exact path='/test2'>
              <Test2 />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
