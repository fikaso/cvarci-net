import "./App.css";
import Circles from "./components/Circles";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import InstagramBlock from "./components/InstagramBlock";
import Location from "./components/Location";
import Nav from "./components/Nav";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <div className="mx-auto flex flex-col max-w-[1440px] mt-14">
        <Nav />
        <Header />
        <Features />
        <Social
          image1="./images/burger_image.png"
          image2="./images/pastifigio_image.png"
          image3="./images/believe_image.png"
          image4="./images/vietnamese_image.png"
          logo1="./icons/burger_logo.svg"
          logo2="./icons/pastifigio_logo.svg"
          logo3="./icons/believe_logo.svg"
          logo4="./icons/vietnamese_logo.svg"
        />
      </div>
      <Contact />
      <div className="mx-auto max-w-[1440px]">
        <Location />
        <Circles />
        <InstagramBlock />
      </div>
    </div>
  );
}

export default App;
