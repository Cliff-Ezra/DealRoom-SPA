import "./App.css";
import Home from "./Components/Home";
import Platform from "./Components/Platform";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Platform />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
