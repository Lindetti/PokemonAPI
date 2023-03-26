import "./header.scss";
import image from "./images/logo.png";

const Header = () => {
    return (
        <header>
           <img src={image} alt="image" />
        </header>
    )
}

export default Header;