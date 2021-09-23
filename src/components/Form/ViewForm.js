import React from "react";
import { elementsOfFormType } from "../../databaseTest/FakeFormData";
import { Form, InputGroup } from "react-bootstrap";

class ViewForm extends React.Component {
  renderElement() {
    const dataInput = this.props.dataInput;
    const elementsInForm = this.props.elementsInForm;
    return elementsInForm.map((ele, index) => {
      switch (ele.view_type) {
        case elementsOfFormType.Input:
          return (
            <Form.Group className="mb-3" controlId={ele.name}>
              <InputGroup className="mb-3">
                <InputGroup.Text>{ele.title}</InputGroup.Text>
                <Form.Control type="text" value={dataInput[ele.name]} />
              </InputGroup>
            </Form.Group>
          );

        default:
          break;
      }
      return false;
    });
  }

  render() {
    return <Form inline>{this.renderElement()}</Form>;
  }
}

export default ViewForm;
