import { Form } from "react-bootstrap";
import { Component } from "react";

class RadioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    this.props.handleInputChange(e);
  };

  render() {
    console.log();
    let ckRows = this.props.sampleSource.map((item, index) => {
      return (
        <Form.Check
          inline
          label={item}
          name={this.props.fieldname}
          value={item}
          type="radio"
          checked={item === this.state.value}
          id={`inline-${this.props.fieldname}-${index}`}
          onChange={this.handleChange}
        />
      );
    });
    return (
      <div key={`inline-${this.props.fieldname}`} className="mb-3">
        {ckRows}
      </div>
    );
  }
}

export default RadioBox;
