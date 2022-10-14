import "./styles/index.css";
import { AudioPlayerProvider } from "react-use-audio-player"


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialNumbers from "./components/SocialNumbers";
function App() {
  return (
    <>
      <Navbar />
      <AudioPlayerProvider>
      <Hero file={"https://www.mboxdrive.com/Black-Sherif-Soja.mp3"}/>
        </AudioPlayerProvider>
        <SocialNumbers/>
    </>
  );
}

export default App;
