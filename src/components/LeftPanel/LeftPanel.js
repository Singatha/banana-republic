import "./styles.css";
// import "../App/styles.css";
import avatar from "../../assets/images/face.svg";
import arrow from "../../assets/images/arrow.svg";
import { useState } from "react";

function LeftPanel() {
  const [toggle, setToggle] = useState(false);

  const handleArrowClick = () => {
    const val = document.getElementById("App").style;
    console.log(val);
    if (toggle === false) {
      document.getElementById("arrow-btn").style.transform = "rotate(-90deg)";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").style.height = "987px";
      setToggle(true);
    } else {
      document.getElementById("arrow-btn").style.transform = "rotate(90deg)";
      document.getElementById("overlay").style.display = "none";
      document.getElementById("overlay").style.height = "0";
      setToggle(false);
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
