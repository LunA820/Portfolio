import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import AppNav from './components/AppNav'
import JpFever from './pages/JpFever'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AppNav />
            <div className="appPages">
              <Home />
              <About />
              <Projects />
            </div>
          </Route>

          <Route exact path="/JpFever">
            <JpFever />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
