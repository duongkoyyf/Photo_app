import RandomPhoto from "component/RandomPhoto";

import PropTypes from "prop-types";
import React from "react";
import {  FormGroup,  Label } from "reactstrap";

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  lable: PropTypes.string,
};
RandomPhotoField.defaultProps = {
  lable: "",
};
function RandomPhotoField(props) {

  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleImageUrlChange = (newImageUrl, id) => {
    
    form.setFieldValue(name, newImageUrl);
    
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
       
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <div className={showError ? "is-invalid" : ""}></div>
      {showError && <p style={{ color: "red" }}>* {errors[name]}</p>}
    </FormGroup>
  );
}
export default RandomPhotoField;
