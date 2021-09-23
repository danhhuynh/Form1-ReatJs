import "./App.css";
import React from "react";
import ViewForm from "./components/Form/ViewForm";
import CreateForm from "./components/Form/CreateForm";
import * as FakeData from "./databaseTest/FakeFormData";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Navbar } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: FakeData.customer,
      customerView: {},
      showView: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;

    switch (target.type) {
      case FakeData.elementsOfFormType.RadioBox:
      case FakeData.elementsOfFormType.ComboBox:
      case FakeData.elementsOfFormType.Input:
        this.setState((prevState) => {
          let customer = Object.assign({}, prevState.customer);
          customer[target.name] = target.value;
          return { customer };
        });

        break;
      case FakeData.elementsOfFormType.CheckBox:
        this.setState((prevState) => {
          let customer = Object.assign({}, prevState.customer);
          if (target.checked) {
            customer[target.name] = customer[target.name]
              ? customer[target.name] + "," + target.value
              : target.value;
          } else {
            customer[target.name] = customer[target.name].replace(
              target.value,
              ""
            );
          }
          customer[target.name] = customer[target.name]
            .replace(/^,/, "")
            .replace(/,,/gm, ",");

          return { customer };
        });

        break;

      default:
        break;
    }
  }

  handleButtonClicked(event) {
    this.setState({ showView: true, customerView: { ...this.state.customer } });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar bg="dark" variant="dark" style={{ marginBottom: "25px" }}>
            <Container>
              <Navbar.Brand href="#create-form">Form Create</Navbar.Brand>
            </Container>
          </Navbar>
          <Row>
            <Col>
              <CreateForm
                dataInput={this.state.customer}
                elementsInForm={FakeData.elementsInForm}
                handleInputChange={this.handleInputChange}
                handleButtonClicked={this.handleButtonClicked}
              />
            </Col>
            <Col></Col>
          </Row>
          <Navbar bg="dark" variant="dark" style={{ margin: "25px 0" }}>
            <Container>
              <Navbar.Brand href="#create-form">Form View</Navbar.Brand>
            </Container>
          </Navbar>
          <Row>
            <Col>
              {this.state.showView && (
                <ViewForm
                  dataInput={this.state.customerView}
                  elementsInForm={FakeData.elementsInForm}
                />
              )}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
