import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./views/HomePage";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import SignIn from "./views/SignIn";
import LogIn from "./views/LogIn";
import "./style.css"
import NotFound from "./views/NotFound";


function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/news"><News /></Route>
            <Route path="/news-details/:id"><NewsDetails /></Route>
            <Route path="/signin"><SignIn /></Route>
            <Route path="/login"><LogIn /></Route>
            <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
  );
}

export default App;
