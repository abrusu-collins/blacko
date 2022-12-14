import vid from "../img/vid.mp4";
import leftarrow from "../img/left.png";
import downarrow from "../img/down.png";

function TVINW() {
  return (
    <div className="tvinw" id="tvinw">
      <p className="title"> DEBUT ALBUM</p>
      <div className="album-name">
        <div>
          <p>THE VILLAIN I NEVER WAS</p>
          <img className="removed" src={downarrow} alt="" />
        </div>
        <video className="removed" id="background-video" autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="listen">
        <iframe
          title="mn"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{
            maxWidth: "660px",
            overflow: "hidden",
            background: "transparent",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/the-villain-i-never-was/1645609301"
        ></iframe>
        <img className="removed" src={leftarrow} alt="leftarrow" />

        <p className="removed">Listen to the album here</p>
      </div>
    </div>
  );
}

export default TVINW;
