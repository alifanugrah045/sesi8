import logo from "./logo.svg";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import HeaderComponents from "./components/HeaderComponents";
import JumbotronComponents from "./components/JumbotronComponents";
import FooterComponents from "./components/FooterComponents";

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <HeaderComponents />
      <JumbotronComponents />
      <FooterComponents />
    </div>
  );
}

export default App;
