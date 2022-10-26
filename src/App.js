import "./styles/index.css";
import { AudioPlayerProvider } from "react-use-audio-player";
// import soja from "../src/mp3/soja.mp3";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialNumbers from "./components/SocialNumbers";
import TVINW from "./components/TVINW";
import Stylish from "./components/Stylish";
import Fans from "./components/Fans";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <AudioPlayerProvider>
        <Hero file={"https://www.mboxdrive.com/Black-Sherif-Soja.mp3"} />
      </AudioPlayerProvider>
      <SocialNumbers />
      <TVINW />
      <Stylish />
      <Fans />
      <Footer />
    </>
  );
}

export default App;
