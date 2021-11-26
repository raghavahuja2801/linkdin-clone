import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route exact path="/home">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
