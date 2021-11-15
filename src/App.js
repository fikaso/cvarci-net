import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="">
      <div className="w-screen max-w-[90rem] mt-14">
        <Nav />
        <Header />
        <Features />
      </div>
    </div>
  );
}

export default App;
