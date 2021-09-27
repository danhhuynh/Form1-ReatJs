import { Form } from "react-bootstrap";

function ComboBox(props) {
  let comboxRows = props.ele.sampleSource.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <div className="mb-3">
      <Form.Select
        value={props.dataInput[props.ele.name]}
        name={props.ele.name}
        onChange={props.handleInputChange}
      >
        <option>Open this select menu</option>
        {comboxRows}
      </Form.Select>
    </div>
  );
}

export default ComboBox;
