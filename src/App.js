import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-[1440px] mx-6 mt-14">
      <Nav />
      <Header />
      <Features />
    </div>
  );
}

export default App;
