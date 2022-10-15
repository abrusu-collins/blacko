import { useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player";

function Hero({ file }) {
  let r;
  useEffect(() => {
    r = document.getElementById("player");
  });

  const { togglePlayPause, playing } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false,
    onend: () => {
      r.classList.remove("animate");
    },
  });
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="music-box" id="player">
          <div>
            <button
              onClick={(e) => {
                togglePlayPause();
                playing
                  ? e.currentTarget.parentElement.parentElement.classList.remove(
                      "animate"
                    )
                  : e.currentTarget.parentElement.parentElement.classList.add(
                      "animate"
                    );
              }}
            >
              {playing ? "Pause" : "Play"}
            </button>
          </div>
        </div>
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
