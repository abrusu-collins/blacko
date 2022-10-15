function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <p> FOLLOW BLACKO</p>
      <div className="links">
        <a href="https://www.youtube.com/channel/UCKfrbVDBEq-wcYC4rUzEosA">YouTube</a>
        <a href="https://www.instagram.com/blacksherif_/">Instagram</a>
        <a href="https://twitter.com/blacksherif_"> Twitter</a>
      </div>
      <div className="sedem">Developed by : DevTech &copy; {year}</div>
    </div>
  );
}

export default Footer;
