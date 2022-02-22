import PhotoList from "component/PhotoList/PhotoList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../Banner";
import './Main.scss'

function Main(){
    const photos=useSelector(state=>state.photos);
    
    return (
        <>
        <Banner title="YOUR PHOTO"/>
        <Container className="main__wrap">
        <Link className="main__text" to="/photo/add">Add new photo</Link>
        <PhotoList
          photoList={photos}
        //   onPhotoEditClick={handlePhotoEditClick}
        //   onPhotoRemoveClick={handlePhotoRemoveClick}
        />
        </Container>
        </>
    )
}
export default Main;