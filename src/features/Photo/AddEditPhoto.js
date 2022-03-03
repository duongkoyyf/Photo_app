import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../../component/Banner";
import FormPhoto from "../../component/FormPhoto";
import { addPhoto, updatePhoto } from "./photoSlice";
function AddEditPhoto() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { photoId } = useParams();
  const isAddmode = !photoId;

  const photoById = useSelector((state) =>state.photos.find((e) => e.id.toString() === photoId));
  const handleSubmit = (value) => {
    
    setTimeout(() => {
      if (isAddmode) {
        dispatch(addPhoto(value));
      } else {
       dispatch(updatePhoto(value));
      }
      history("/");
    }, 2000);
  };

  const initialValue = isAddmode
    ? {
        title: "",
        categoryId: null,
        photo: { url: "", id: null },
      }
    : photoById;
  return (
    <div className="addEdit__main">
      <Banner title="Add Or Edit Your Photo" />
      <FormPhoto initialValue={initialValue} onSubmit={handleSubmit} />
    </div>
  );
}
export default AddEditPhoto;
