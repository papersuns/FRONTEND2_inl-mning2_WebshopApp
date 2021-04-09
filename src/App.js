import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <Header/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
