import logo from "./logo.svg";
import "./App.css";
import Cpt_Menu from "./components/com.Menu/Cpt_Menu";
import routers from "./routers/Router";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  showContentMenus = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((router, index) => { 
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Cpt_Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenus(routers)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
