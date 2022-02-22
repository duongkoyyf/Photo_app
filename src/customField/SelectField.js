import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  options: PropTypes.array,
};
SelectField.defaultProps = {
  lable: "",
  placeholder: "",
  disable: false,
  options: [],
};
function SelectField(props) {
  const { field,form, options, label, placeholder, disable } = props;
  const { name,value } = field;
  const {errors,touched}=form;
  const showError=errors[name]&&touched[name];
  const handleSelectedOptionChange = (selection) => {
        const selectValue = selection ? selection.value : selection;
    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
         value={options[value]}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={options}
        disabled={disable}

       
        />
       {showError&&<p style={{color:"red"}}>* {errors[name]}</p>}
    </FormGroup>
  );
}
export default SelectField;
