
import { useAudioPlayer } from "react-use-audio-player"

function Hero({file}) {
    const { togglePlayPause, playing } = useAudioPlayer({
        src: file,
        format: "mp3",
        autoplay: false,
        onend: () => console.log("sound has ended!")
    })
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="music-box"><div>
            <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
        </div></div>
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
