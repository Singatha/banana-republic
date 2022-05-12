import card from "../../../assets/images/card.svg";
import cardWhite from "../../../assets/images/card--white.svg";

import { useState } from "react";

function Membership() {
  const [member, setMembership] = useState({
    classicChecked: false,
    silverChecked: false,
    goldChecked: false
  });

  const handleMember = (event) => {
    if (event.target.value === "classic") {
      setMembership((prevState) => {
        return {
          ...prevState,
          classicChecked: true,
          silverChecked: false,
          goldChecked: false
        };
      });
    } else if (event.target.value === "silver") {
      setMembership((prevState) => {
        return {
          ...prevState,
          classicChecked: false,
          silverChecked: true,
          goldChecked: false
        };
      });
    } else if (event.target.value === "gold") {
      setMembership((prevState) => {
        return {
          ...prevState,
          classicChecked: false,
          silverChecked: false,
          goldChecked: true
        };
      });
    }
  };

  return (
    <div className="membership" onChange={handleMember}>
      <p>Membership</p>
      <div className="member-labels">
        <label htmlFor="classic">
          <input
            type="radio"
            id="classic"
            name="membership"
            value="classic"
            checked={member.classicChecked}
          />
          <img
            src={member.classicChecked === true ? cardWhite : card}
            alt="Card Icon"
          />
          Classic
        </label>

        <label htmlFor="silver">
          <input
            type="radio"
            id="silver"
            name="membership"
            value="silver"
            checked={member.silverChecked}
          />
          <img
            src={member.silverChecked === true ? cardWhite : card}
            alt="Card Icon"
          />
          Silver
        </label>

        <label htmlFor="gold">
          <input
            type="radio"
            id="gold"
            name="membership"
            value="gold"
            checked={member.goldChecked}
          />
          <img
            src={member.goldChecked === true ? cardWhite : card}
            alt="Card Icon"
          />
          Gold
        </label>
      </div>
    </div>
  );
}

export default Membership;
