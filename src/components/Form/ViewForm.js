import React from "react";

class ViewForm extends React.Component {
  render() {
    return (
      <div inline>
        <span>FirstName: {this.props.dataInput.first_name}</span>
        <br />
        <span>LastName: {this.props.dataInput.last_name}</span>
        <br />
        <span>Gender: {this.props.dataInput.gender}</span>
        <br />
        <span>Fav: {this.props.dataInput.fav}</span>
        <br />
        <span>Role: {this.props.dataInput.role}</span>
        <br />
      </div>
    );
  }
}

export default ViewForm;
