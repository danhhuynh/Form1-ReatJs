import { Button } from "react-bootstrap";

function SaveButton(props) {
  return (
    <Button variant="primary" onClick={props.handleButtonClicked}>
      {props.title}
    </Button>
  );
}

export default SaveButton;
