import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar" id="home">
      <p>BLACKO.</p>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#tvinw">TVINW</a>
        </li>
        <li>
          <a href="#fans">Fans</a>
        </li>
        <li>
          <a href="#pics">Gallery</a>
        </li>
      </ul>
      <div
        className="bar"
        onClick={(e) => {
          e.currentTarget.parentElement.children[1].classList.toggle(
            "navremoval"
          );
          e.currentTarget.parentElement.classList.toggle("space");
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
