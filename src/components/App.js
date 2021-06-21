import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import UserDetail from "./UserDetail";
import Navbar from "./Navbar";
import "./../styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/user" render={() => <UserDetail />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
