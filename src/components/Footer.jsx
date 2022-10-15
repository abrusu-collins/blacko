function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <p> FOLLOW BLACKO</p>
      <div className="links">
        <a href=" ">YouTube</a>
        <a href=" ">Instagram</a>
        <a href=" "> Twitter</a>
      </div>
      <div className="sedem">Developed by : DevTech &copy; {year}</div>
    </div>
  );
}

export default Footer;
