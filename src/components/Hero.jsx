import musicicon from "../img/music.png";
function Hero() {
  return (
    <div className="hero">
      <div className="left-flex">
        <p className="name">
          Black Sherif <img src={musicicon} alt="musicicon" />
        </p>
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
      <div className="right-flex">

        
      </div>
    </div>
  );
}

export default Hero;
