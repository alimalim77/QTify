import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Song />
    </div>
  );
}

export default App;
