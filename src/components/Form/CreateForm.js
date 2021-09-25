import React from "react";
import { sampleSourceForElement } from "../../databaseTest/FakeFormData";
import Input from "./Elements/Input";
import SaveButton from "./Elements/SaveButton";
import CheckBox from "./Elements/CheckBox";
import RadioBox from "./Elements/RadioBox";
import ComboBox from "./Elements/ComboBox";
import { Form } from "react-bootstrap";

class CreateForm extends React.Component {
  render() {
    return (
      <Form inline>
        <Input
          title="FirstName"
          fieldname="first_name"
          handleInputChange={this.props.handleInputChange}
        />
        <Input
          title="Lastname"
          fieldname="last_name"
          handleInputChange={this.props.handleInputChange}
        />
        <RadioBox
          fieldname="gender"
          multi={false}
          handleInputChange={this.props.handleInputChange}
          sampleSource={sampleSourceForElement.gender}
        />
        <CheckBox
          fieldname="fav"
          multi={true}
          handleInputChange={this.props.handleInputChange}
          sampleSource={sampleSourceForElement.fav}
        />
        <ComboBox
          fieldname="role"
          handleInputChange={this.props.handleInputChange}
          sampleSource={sampleSourceForElement.role}
        />
        <SaveButton
          title="Save"
          handleButtonClicked={this.props.handleButtonClicked}
        />
      </Form>
    );
  }
}

export default CreateForm;
