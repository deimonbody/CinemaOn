import { Link } from "react-router-dom";
import Logo from '../header/logo.png';
import './style.scss';

const Footer:React.FC = ()=>{
    return(
        <div className="footer container-md justify-content-between d-flex  align-items-start align-items-sm-center mt-5 py-3 flex-column flex-sm-row">
                <Link to="/" className="footer__logo mb-3 mb-sm-0">
                    <img src={Logo} alt="Logo" className="navbar-brand-img"/>
                </Link>
                <span className="gu-white footer__text">
                    ©2022 CinemaON; All rights reserved
                </span>
        </div>
    )
}

export default Footer;