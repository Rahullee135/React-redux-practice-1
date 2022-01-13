import "./App.css";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserPage } from "./containers/UserPage";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route>404 Not Found!</Route>
        </Switch>
    </Router>
  );
}

export default App;
