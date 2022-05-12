import "./styles.css";

import Gender from "./RadioButtons/Gender";
import Membership from "./RadioButtons/Membership";

function Form() {
  const handleCancel = () => {
    document.forms["userForm"]["fullname"].value = "";
    document.forms["userForm"]["dob"].value = "";
    document.forms["userForm"]["email"].value = "";
    document.forms["userForm"]["mobile"].value = "";
    document.forms["userForm"]["customerID"].value = "";
  };

  return (
    <div className="Form">
      <form name="userForm">
        <div className="input-label">
          <label htmlFor="fullname">Name</label>
          <input type="text" id="fullname" name="fullname" />
        </div>

        <Gender />

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

        <Membership />

        <div className="input-label">
          <input type="button" value="Cancel" onClick={handleCancel} />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}

export default Form;
