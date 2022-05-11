import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import Logo from './logo.png';
import { PersonCircle,List,X } from 'react-bootstrap-icons';
import { useState } from 'react';

const Header:React.FC = ()=>{
    const location = useLocation();
    const [isBurgerActive,setIsBurgerActive] = useState(false);

    return(
        <Navbar expand="md" sticky="top" className={`bg-color ${isBurgerActive ? 'pb-0' : 'pb-3'} py-md-3`}>
        <Container className="header__container">
            <Link to="/" className="header__container__img-container d-block me-auto me-md-5 order-md-1 ps-2 ps-md-0">
                <img src={Logo} alt="Logo" className="navbar-brand-img"/>
            </Link>
         
          <Navbar.Collapse id="basic-navbar-nav" className="order-last order-md-2 mt-3 mt-md-0">
            <Nav className="me-auto gu-white align-items-center">
              <Link to="/" className={`me-0 navigation-link me-md-4
              ${location.pathname === "/" ? "navigation-link--active": ""}`}>
                Main</Link>
              <Link to="/movies" className={`me-0 me-md-4 navigation-link ${location.pathname === "/movies" ? "navigation-link--active": ""}`}>Movies</Link>
              <Link to="/follows" className={`me-0 me-md-4 navigation-link ${location.pathname === "/follows" ? "navigation-link--active": ""}`}>Favorites</Link>
            </Nav>
          </Navbar.Collapse>
           
           <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-burger me-2 me-md-0" onClick={()=>{setIsBurgerActive(!isBurgerActive)}}>
                {isBurgerActive ? <X />:<List />}
                
           </Navbar.Toggle>
        </Container>
      </Navbar>
    )
}
export default Header;