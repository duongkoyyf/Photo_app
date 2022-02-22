import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};
InputField.defaultProps = {
  type: "text",
  lable: "",
  placeholder: "",
  disable: false,
};
function InputField(props) {
  const { field, form, type, label, placeholder, disable } = props;
  const { name } = field;
  const {errors,touched}=form;
  const showError=errors[name]&&touched[name];
  return (
    <FormGroup>
      {label && <>
        <Label for={name}>{label}</Label>
        <br/>
      </>
      }

      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        type={type}
        disabled={disable}
        invalid={showError||false}
      ></Input>
    
    {showError&&<p style={{color:"red"}}>* {errors[name]}</p>}
    </FormGroup>
  );
}
export default InputField;
