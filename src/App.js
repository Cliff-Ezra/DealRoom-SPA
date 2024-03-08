import "./App.css";
import About from "./Components/About";
import Benefits from "./Components/Benefits";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Platform from "./Components/Platform";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Platform />
      <Benefits />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
