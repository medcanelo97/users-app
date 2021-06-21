import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./../styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
