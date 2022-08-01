import React from "react";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
    case "radio": return <Select {...rest} />
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
