import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar';
import BasketView from './component/basketView';
import UpdateView from './screen/updateView';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Switch>
          <Route path="/versions">
            <UpdateView />
          </Route>
          <Route exec path="/">
            <BasketView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
