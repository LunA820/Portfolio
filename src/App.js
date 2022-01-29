import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import AppNav from './components/AppNav'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <AppNav />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
