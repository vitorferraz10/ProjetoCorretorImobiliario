import Header from "./components/header/Header.js";
import Hero from "./components/hero/Hero.js";
import Caracteristicas from "./components/caracteristicas/Caracteristicas.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Caracteristicas />
      {/*  <Main/> */}

      <Footer />
    </div>
  );
}

export default App;
