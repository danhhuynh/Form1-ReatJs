import { Form, InputGroup } from "react-bootstrap";
import { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.handleInputChange(event);
  }

  render() {
    return (
      <Form.Group className="mb-3" controlId={this.props.fieldname}>
        <InputGroup className="mb-3">
          <InputGroup.Text>{this.props.title}</InputGroup.Text>
          <Form.Control
            type="text"
            name={this.props.fieldname}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </InputGroup>
      </Form.Group>
    );
  }
}

export default Input;
