import "./App.css";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Social from "./components/Social";

function App() {
  return (
    <div className="">
      <div className="md:max-w-[1440px] mt-14">
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
    </div>
  );
}

export default App;
