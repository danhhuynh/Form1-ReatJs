import { Button } from "react-bootstrap";

function SaveButton(props) {
  return (
    <Button variant="primary" onClick={props.handleButtonClicked}>
      {props.ele.title}
    </Button>
  );
}

export default SaveButton;
