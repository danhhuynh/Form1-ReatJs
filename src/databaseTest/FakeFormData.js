export const elementsOfFormType = {
  Input: "text",
  CheckBox: "checkbox",
  RadioBox: "radio",
  ComboBox: "select-one",
  Button: "button",
};

export const sampleSourceForElement = {
  gender: ["Male", "Female"],
  fav: [
    "Football",
    "Swimming",
    "Volleyball",
    "Badminton",
    "Baseball",
    "Chess",
    "Cycling",
    "Golf",
  ],
  role: ["User", "Admin", "Mode"],
};

export const sampleForm = {
  id: 1,
  name: "Form Khách Hàng",
};

export const elementsInForm = [
  {
    form_id: 1,
    view_type: elementsOfFormType.Input,
    edit_type: elementsOfFormType.Input,
    name: "first_name",
    title: "Firstname",
    pos: 1,
  },
  {
    form_id: 1,
    view_type: elementsOfFormType.Input,
    edit_type: elementsOfFormType.Input,
    name: "last_name",
    title: "Lastname",
    pos: 2,
  },
  {
    form_id: 1,
    view_type: elementsOfFormType.Input,
    edit_type: elementsOfFormType.RadioBox,
    name: "gender",
    title: "Gender",
    sampleSource: sampleSourceForElement.gender,
    pos: 3,
  },
  {
    form_id: 1,
    view_type: elementsOfFormType.Input,
    edit_type: elementsOfFormType.CheckBox,
    name: "fav",
    title: "Fav",
    sampleSource: sampleSourceForElement.fav,
    pos: 4,
  },
  {
    form_id: 1,
    view_type: elementsOfFormType.Input,
    edit_type: elementsOfFormType.ComboBox,
    name: "role",
    title: "Role",
    sampleSource: sampleSourceForElement.role,
    pos: 5,
  },
  {
    form_id: 1,
    edit_type: elementsOfFormType.Button,
    name: "save_btn",
    title: "Save",
    pos: 6,
  },
];

// export const customer = {
//   first_name: "danh",
//   last_name: "huynh",
//   gender: "Male",
//   fav: "Swimming",
//   role: "User",
// };

export const customer = {};
