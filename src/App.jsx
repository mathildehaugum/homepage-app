import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Work from "./components/Work";
import CvComponent from "./components/CvComponent";
import Error from "./components/Error";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/cv" component={CvComponent} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
