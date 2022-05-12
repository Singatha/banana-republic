function Gender(props) {
  return (
    <div className="genders" onChange={props.onHandleGender}>
      <p>Gender</p>
      <div className="gender-labels">
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            defaultChecked={props.gender.marsChecked}
          />
          <img
            id="mars-icon"
            src={
              props.gender.marsChecked === true ? props.marsWhite : props.mars
            }
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
            defaultChecked={props.gender.venusChecked}
          />
          <img
            id="venus-icon"
            src={
              props.gender.venusChecked === true
                ? props.venusWhite
                : props.venus
            }
            alt="Female Icon"
          />
          Female
        </label>
      </div>
    </div>
  );
}

export default Gender;
