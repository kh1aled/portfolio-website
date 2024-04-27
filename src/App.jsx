import "./App.css";
import Home from "./routes/home/Home";
import About from "./routes/about/About";

import Portfolio from "./routes/portfolio/Portfolio";
import Blog from "./routes/blog/Blog";
import Pricing from "./routes/pricing/Pricing";
import "./css/bootstrap.min.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Services from "./routes/service/Services";
import Contact from "./routes/contact/Contact";
import Nav from "./Components/navbar/Nav";
import Preloader from "./Components/preloader/Preloader";


function App() {
 

  return (
    <HashRouter>
      <div className="app">
        <Preloader/>
        <Nav />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Pricing />
        <Contact />
      </div>
    </HashRouter>
  );
}

export default App;
