import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { AppCar } from "./pages/AppCar";
import { AppCarAdd } from "./pages/AppCarAdd";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/cars">cars</Link>
            </li>
            <li>
              <Link to="/add">add</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/cars">
            <AppCar />
          </Route>
          <Route path="/add">
            <AppCarAdd />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
