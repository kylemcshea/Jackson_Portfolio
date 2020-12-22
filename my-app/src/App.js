import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Media from "./components/Media";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/media">
          <Media />
        </Route>
        <Route exact path="/testimonials">
          <Testimonials />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
