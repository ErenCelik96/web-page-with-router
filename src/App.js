import './App.css';
import { BrowserRouter as Rounter, Route, Switch, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Home from "./components/Home";
import About from "./components/About";
import Css from "./components/Css";
import Html from "./components/Html";
import Design from "./components/Design";


function App() {
  return (
    <Rounter>
      <div className="App">
        <div className="navbar">
          <nav>
            <div className="navbar-logo">
              <h1>Clarusway <span>Web Design</span></h1>
            </div>
            <div className="navbar-btn--container">
              <ul className="btn-group">
                <Link to="/" style={{ textDecoration: 'none' }}>
                <li>Home</li>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                <li className="btn-active">About</li>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                <li>Services</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route exact path="/" component={Home} />
          <Route path="/css" component={Css} />
          <Route path="/html" component={Html} />
          <Route path="/design" component={Design} />
        </Switch>
        <Footer />
      </div>
    </Rounter>
  );
}

export default App;
