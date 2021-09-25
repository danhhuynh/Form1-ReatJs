import { Form } from "react-bootstrap";
import { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
    this.props.handleInputChange({
      target: {
        name: this.props.fieldname,
        value: e.target.name,
        checked: isChecked,
        type: "checkbox",
      },
    });
  };

  render() {
    let ckRows = this.props.sampleSource.map((item, index) => {
      return (
        <Form.Check
          inline
          label={item}
          name={item}
          value={item}
          multi={this.props.multi}
          type="checkbox"
          checked={!!this.state.checkedItems.get(item)}
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

export default CheckBox;
