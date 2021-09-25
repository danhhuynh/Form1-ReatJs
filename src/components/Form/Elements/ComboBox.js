import { Form } from "react-bootstrap";
import { Component } from "react";

class ComboBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
    this.props.handleInputChange(event);
  }

  render() {
    let comboxRows = this.props.sampleSource.map((item, index) => {
      return <option value={item}>{item}</option>;
    });
    return (
      <div class="mb-3">
        <Form.Select
          value={this.state.value}
          name={this.props.fieldname}
          onChange={this.handleChange}
        >
          <option>Open this select menu</option>
          {comboxRows}
        </Form.Select>
      </div>
    );
  }
}

export default ComboBox;
