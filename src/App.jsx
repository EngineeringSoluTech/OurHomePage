import Test from "./Test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import End from "./components/end/End";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {

  return (
  <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section >
      <Services/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>

    <Portfolio/>

    <section id="About">
      <Contact/>
    </section>
    <section id="End">
      <End/>
    </section>
    {/* <Test/> */}
  </div>
  )
};

export default App;
