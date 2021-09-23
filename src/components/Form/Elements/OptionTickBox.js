import { Form } from "react-bootstrap";
import { elementsOfFormType } from "../../../databaseTest/FakeFormData";

function OptionTickBox(props) {
  let ckRows = props.ele.sampleSource.map((item, index) => {
    let checked = false;
    if (props.dataInput[props.ele.name] !== undefined) {
      checked = props.dataInput[props.ele.name].includes(item) ? true : false;
    }

    return (
      <Form.Check
        inline
        label={item}
        name={props.ele.name}
        value={item}
        multi={props.ele.edit_type === elementsOfFormType.CheckBox}
        type={props.ele.edit_type}
        checked={checked}
        id={`inline-${props.ele.edit_type}-${index}`}
        onChange={props.handleInputChange}
      />
    );
  });
  return (
    <div key={`inline-${props.ele.edit_type}`} className="mb-3">
      {ckRows}
    </div>
  );
}

export default OptionTickBox;
