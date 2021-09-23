import { Form } from "react-bootstrap";

function ComboBox(props) {
  let comboxRows = props.ele.sampleSource.map((item, index) => {
    return (
      <option
        selected={item === props.dataInput[props.ele.name] ? "selected" : ""}
        value={item}
      >
        {item}
      </option>
    );
  });
  return (
    <div class="mb-3">
      <Form.Select name={props.ele.name} onChange={props.handleInputChange}>
        <option>Open this select menu</option>
        {comboxRows}
      </Form.Select>
    </div>
  );
}

export default ComboBox;
