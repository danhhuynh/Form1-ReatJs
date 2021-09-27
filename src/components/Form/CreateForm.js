import React from "react";
import { elementsOfFormType } from "../../databaseTest/FakeFormData";
import Input from "./Elements/Input";
import SaveButton from "./Elements/SaveButton";
import OptionTickBox from "./Elements/OptionTickBox";
import ComboBox from "./Elements/ComboBox";
import { Form } from "react-bootstrap";

class CreateForm extends React.Component {
  renderElement() {
    const dataInput = this.props.dataInput;
    const elementsInForm = this.props.elementsInForm;

    return elementsInForm.map((ele, index) => {
      switch (ele.edit_type) {
        case elementsOfFormType.Input:
          return (
            <Input
              ele={ele}
              key={index}
              dataInput={dataInput}
              handleInputChange={this.props.handleInputChange}
            />
          );
        case elementsOfFormType.Button:
          return (
            <SaveButton
              ele={ele}
              key={index}
              handleButtonClicked={this.props.handleButtonClicked}
            />
          );
        case elementsOfFormType.RadioBox:
        case elementsOfFormType.CheckBox:
          return (
            <OptionTickBox
              ele={ele}
              key={index}
              dataInput={dataInput}
              handleInputChange={this.props.handleInputChange}
            />
          );
        case elementsOfFormType.ComboBox:
          return (
            <ComboBox
              ele={ele}
              key={index}
              dataInput={dataInput}
              handleInputChange={this.props.handleInputChange}
            />
          );

        default:
          break;
      }
      return false;
    });
  }

  render() {
    return <Form inline={"true"}>{this.renderElement()}</Form>;
  }
}

export default CreateForm;
