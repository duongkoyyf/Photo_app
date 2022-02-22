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
        {photos.map((item,i)=>(
            
                <div key={i}>
                    {item.title}
                </div>
            
        ))}
        </Container>
        </>
    )
}
export default Main;