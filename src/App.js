import "./styles/index.css";
import { AudioPlayerProvider } from "react-use-audio-player"


import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <AudioPlayerProvider>
      <Hero file={"https://www.mboxdrive.com/Black-Sherif-Soja.mp3"}/>
        </AudioPlayerProvider>
    </>
  );
}

export default App;
