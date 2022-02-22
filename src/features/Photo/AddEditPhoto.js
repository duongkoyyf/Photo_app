import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../../component/Banner";
import FormPhoto from "../../component/FormPhoto";
import { addPhoto } from "./photoSlice";
function AddEditPhoto() {
  const dispatch=useDispatch();
  const history=useNavigate();
  
  const handleSubmit=(value)=>{
    setTimeout(() => {
      dispatch(addPhoto(value));
      history('/')
    
    }, 2000);
  }
    return (
  <div className="addEdit__main">
      <Banner title="Add Or Edit Your Photo"/>
      <FormPhoto onSubmit={handleSubmit}/>
  </div>
    )
}
export default AddEditPhoto;
