import "./styles.css";
import "normalize-css";
import Form from "../Form/Form";
import LeftPanel from "../LeftPanel/LeftPanel";

export default function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Form />
      <div className="Form overlay" id="overlay">
        <h1>My world today</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. <a href="#">View all days</a>{" "}
          eu libero sit amet quamegestas semper. Aenean ultricies mi vitae est.
          Mauris placerat eleifend leo. Quisque sit amet est et sapien
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commondo
          vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
          condimentum, eros ipsum rutrum orci, sagittis tempuslacus enimac dui.
          Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
          dapibus, neque id cursus faucibus, tortor newue egestas augue, eu
          vulputate magna eros eu erat. Aliquam erat
        </p>
      </div>
    </div>
  );
}
