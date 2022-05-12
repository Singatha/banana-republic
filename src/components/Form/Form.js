import "./styles.css";
import card from "../../assets/images/card.svg";
import cardWhite from "../../assets/images/card--white.svg";
import mars from "../../assets/images/mars-symbol.svg";
import marsWhite from "../../assets/images/mars-symbol--white.svg";
import venus from "../../assets/images/venus-symbol.svg";
import venusWhite from "../../assets/images/venus-symbol--white.svg";

import { useState } from "react";
import Gender from "./RadioButtons/Gender";
import Membership from "./RadioButtons/Membership";

function Form() {
  const [gender, setGender] = useState({
    marsChecked: false,
    venusChecked: false
  });
  const [member, setMembership] = useState({
    classicChecked: false,
    silverChecked: false,
    goldChecked: false
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

  const handleCancel = () => {
    document.forms["userForm"]["fullname"].value = "";
    setGender((prevState) => {
      return { ...prevState, venusChecked: false, marsChecked: false };
    });
    document.forms["userForm"]["gender"].checked = false;
    document.forms["userForm"]["dob"].value = "";
    document.forms["userForm"]["email"].value = "";
    document.forms["userForm"]["mobile"].value = "";
    document.forms["userForm"]["customerID"].value = "";
    setMembership((prevState) => {
      return {
        ...prevState,
        classicChecked: false,
        silverChecked: false,
        goldChecked: false
      };
    });
  };

  return (
    <div className="Form">
      <form name="userForm">
        <div className="input-label">
          <label htmlFor="fullname">Name</label>
          <input type="text" id="fullname" name="fullname" />
        </div>

        <Gender
          gender={gender}
          mars={mars}
          venus={venus}
          marsWhite={marsWhite}
          venusWhite={venusWhite}
          onHandleGender={handleGender}
        />

        <div className="input-label">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" />
        </div>

        <div className="input-label">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="input-label">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="+91 98765 43210"
          />
        </div>

        <div className="input-label">
          <label htmlFor="customerID">Customer ID</label>
          <input
            type="text"
            id="customerID"
            name="customerID"
            placeholder="576802-ERD0348 45"
          />
        </div>

        <Membership
          member={member}
          card={card}
          cardWhite={cardWhite}
          onHandleMember={handleMember}
        />

        <div className="input-label">
          <input type="button" value="Cancel" onClick={handleCancel} />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}

export default Form;
