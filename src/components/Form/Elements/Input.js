import { Form, InputGroup } from "react-bootstrap";

function Input(props) {
  return (
    <Form.Group className="mb-3" controlId={props.ele.name}>
      <InputGroup className="mb-3">
        <InputGroup.Text>{props.ele.title}</InputGroup.Text>
        <Form.Control
          type={props.ele.edit_type}
          name={props.ele.name}
          value={props.dataInput[props.ele.name]}
          onChange={props.handleInputChange}
        />
      </InputGroup>
    </Form.Group>
  );
}

export default Input;
