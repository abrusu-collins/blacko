import vid from "../img/vid.mp4";
import rightarrow from "../img/right.png";
function TVINW() {
  return (
    <div className="tvinw">
      <p className="title"> DEBUT ALBUM</p>
      <div className="album-name">
        <p>THE VILLAIN I NEVER WAS</p>

        <video id="background-video" autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="listen">
        <p>Listen to the album here</p>
        <img src={rightarrow} alt="rightarrow" />
       <iframe
          title="mn"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            background: "transparent",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/the-villain-i-never-was/1645609301"
        ></iframe>
      </div>
    </div>
  );
}

export default TVINW;
