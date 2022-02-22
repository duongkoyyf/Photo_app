import React from "react";
import { Button } from "reactstrap";

function RandomPhoto(props) {
  const getRandomUrlPhoto = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `http://picsum.photos/id/${randomId}/300/300`;
  };
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomUrlPhoto();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className="random-photo">
      <div>
        {/* <Label for="categoryId">Photo</Label> */}
        <div>
          <Button
            type="button"
            outline
            color="primary"
            onBlur={onRandomButtonBlur}
            onClick={handleRandomPhotoClick}
          >
            Random a Photo
          </Button>
        </div>
        <div className="random-photo__photo">
          {imageUrl && <img src={imageUrl} alt="no img" />}
        </div>
      </div>
      
      
    </div>
  );
}
export default RandomPhoto;
