import useSound from 'use-sound';
import soja from "../audio/Black-Sherif-Soja.mp3";
function Hero() {
    const [playSound] = useSound(soja)
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="music-box"> <button onClick={() => playSound()}>
       Play Sound
    </button></div>
        <p className="about">
          Black Sherif is the voice of the streets in Ghana right now. His music
          speaks to the souls and hearts of his fans. He started his music
          career at the age of 17 immediately after completing high school. He
          had few songs doing well then, but his success story really started
          after he released his mega hit titled "the first sermon". After that,
          everything he touches is a blessing. He is indeed a musical genius.
        </p>
        <a href=" ">Explore his music</a>
      </div>
    </div>
  );
}

export default Hero;
