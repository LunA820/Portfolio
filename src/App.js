import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import AppNav from './components/AppNav'
import bgVideo from './assets/home_video.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <AppNav />

      <video className="bgVideo" autoPlay loop muted>
        <source src={bgVideo} type='video/mp4' />
      </video>

      <div className="appPages">
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
