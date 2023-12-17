import Test from "./Test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";

const App = () => {

  return (
  <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section >Services</section>
    <section id="Portfolio1">Portfolio1</section>
    <section id="Portfolio2">Portfolio2</section>
    <section id="Portfolio3">Portfolio3</section>
    <section id="About">Contact</section>
    {/* <Test/> */}
  </div>
  )
};

export default App;
