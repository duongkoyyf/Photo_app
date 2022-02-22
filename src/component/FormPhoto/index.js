import InputField from "customField/InputFIeld";
import RandomPhotoField from "customField/randomPhotoField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import { PHOTO_CATEGORY } from "../../constants/global";
import SelectField from "../../customField/SelectField";
import "./FormPhoto.scss";
import * as yup from 'yup'

function FormPhoto(props) {
  const initialValue = {
    title: "",
    categoryId: null,
    photo: "",
  };
  const validationSchema=yup.object().shape({
    title:yup.string().required('This field is required'),
    categoryId:yup.number().required('This field is required').nullable(),
    photo:yup.string().required('This field is required'),
  });
  return (
    <div className="form">
      <Formik initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}>
        {(props) => {
          const {isSubmitting}=props;
          return (
            <Form>
              <FastField
                className="form__input"
                name="title"
                type="text"
                component={InputField}
                label="Title"
                placeholder="Eg..."
              />
              <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="Category?"
                options={PHOTO_CATEGORY}
              />

              <FastField
                name="photo"
                component={RandomPhotoField}
                label="Photo"
              />
              <FormGroup>
                <div>
                  <Button type="submit" color="primary">
                    Add to album
                  </Button>
                  {isSubmitting&&<Spinner size='sm'/>}
                </div>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default FormPhoto;
