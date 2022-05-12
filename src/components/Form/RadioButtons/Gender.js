import mars from "../../../assets/images/mars-symbol.svg";
import marsWhite from "../../../assets/images/mars-symbol--white.svg";
import venus from "../../../assets/images/venus-symbol.svg";
import venusWhite from "../../../assets/images/venus-symbol--white.svg";
import { useState } from "react";

function Gender() {
  const [gender, setGender] = useState({
    marsChecked: false,
    venusChecked: false
  });

  const handleGender = (event) => {
    if (event.target.value === "male") {
      setGender((prevState) => {
        return { ...prevState, venusChecked: false, marsChecked: true };
      });
    } else if (event.target.value === "female") {
      setGender((prevState) => {
        return { ...prevState, venusChecked: true, marsChecked: false };
      });
    }
  };

  return (
    <div className="genders" onChange={handleGender}>
      <p>Gender</p>
      <div className="gender-labels">
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender.marsChecked}
          />
          <img
            id="mars-icon"
            src={gender.marsChecked === true ? marsWhite : mars}
            alt="Male Icon"
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender.venusChecked}
          />
          <img
            id="venus-icon"
            src={gender.venusChecked === true ? venusWhite : venus}
            alt="Female Icon"
          />
          Female
        </label>
      </div>
    </div>
  );
}

export default Gender;
