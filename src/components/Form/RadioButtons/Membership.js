function Membership(props) {
  return (
    <div className="membership" onChange={props.onHandleMember}>
      <p>Membership</p>
      <div className="member-labels">
        <label htmlFor="classic">
          <input
            type="radio"
            id="classic"
            name="membership"
            value="classic"
            defaultChecked={props.member.classicChecked}
          />
          <img
            src={
              props.member.classicChecked === true
                ? props.cardWhite
                : props.card
            }
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
            defaultChecked={props.member.silverChecked}
          />
          <img
            src={
              props.member.silverChecked === true ? props.cardWhite : props.card
            }
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
            defaultChecked={props.member.goldChecked}
          />
          <img
            src={
              props.member.goldChecked === true ? props.cardWhite : props.card
            }
            alt="Card Icon"
          />
          Gold
        </label>
      </div>
    </div>
  );
}

export default Membership;
