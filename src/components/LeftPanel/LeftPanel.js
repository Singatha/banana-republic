import "./styles.css";
import avatar from "../../assets/images/face.svg";
import arrow from "../../assets/images/arrow.svg";
import { useState } from "react";

function LeftPanel() {
  const [toggleBtm, setToggleBtm] = useState(false);
  const [toggleSide, setToggleSide] = useState(false);

  const handleArrowClick = () => {
    if (window.innerWidth >= 922) {
      document.getElementById("arrow-btn").style.transform = "rotate(-360deg)";
      if (toggleSide === false) {
        document.getElementById("arrow-btn").style.transform =
          "rotate(-360deg)";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay").style.width = "auto";
        setToggleSide(true);
      } else {
        document.getElementById("arrow-btn").style.transform = "rotate(180deg)";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlay").style.width = "0";
        setToggleSide(false);
      }
    } else {
      document.getElementById("arrow-btn").style.transform = "rotate(-360deg)";
      if (toggleBtm === false) {
        document.getElementById("arrow-btn").style.transform = "rotate(-90deg)";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay").style.height = "100%";
        document.getElementById("overlay").scrollIntoView();
        setToggleBtm(true);
      } else {
        document.getElementById("arrow-btn").style.transform = "rotate(90deg)";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("overlay").style.height = "0";
        setToggleBtm(false);
      }
    }
  };

  return (
    <div className="left-panel">
      <img src={avatar} alt="Avatar Icon" />
      <h1>Front-end challenge!</h1>
      <p>This is a design that you will need to code up and impress us.</p>
      <button
        className="arrow-button"
        id="arrow-btn"
        onClick={handleArrowClick}
      >
        <img src={arrow} alt="Arrow Icon" />
      </button>
    </div>
  );
}

export default LeftPanel;
