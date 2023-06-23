import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Slide2, Slide3, Slide4, Slide5 } from "../containers";
import App from "./App";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/airlift" component={App} />
        <Route path="/get-started" component={Slide2} />
        <Route path="/welcome" component={Slide3} />
        <Route path="/demo" component={Slide4} />
        <Route path="/onboarding" component={Slide5} />
      </Switch>
    </Router>
  );
}

export default Main;
