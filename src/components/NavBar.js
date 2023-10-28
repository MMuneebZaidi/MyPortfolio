import { useState} from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import github from '../assets/images/github.png';
import insta from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import Logo from '../assets/images/Logo.png';

export const NavBar = ({scrolled,footerVisible}) =>{
    const [activeLink,setactiveLink] = useState("homepage");

    
    const onUpdateActiveLink = (val) =>{
        setactiveLink(val);
    }
    const scrollToContactMe = () => {
        const contactMeSection = document.getElementById('connect');
        if (contactMeSection) {
          contactMeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <Navbar expand='lg' className={scrolled? footerVisible?"scrolledF":"scrolled"   :""}>
            <Container>
                <Navbar.Brand href = "#homepage" className="logo">
                    <img src={Logo}  alt="Logo" ></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Row><div ></div></Row>
                    <Nav.Link href="#homepage" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Row><div ></div></Row>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/MMuneebZaidi"><img src={github} alt=""/> </a>
                        <a href="https://www.linkedin.com/in/muneeb-zaidi-14190b245/"><img src={linkedin} alt=""/> </a>
                        <a href="https://www.instagram.com/muneebayyyyy._/" style={{marginRight:50}}><img src={insta} alt=""/> </a>
                    </div>
                        <button href='#connect' class="btn-53" onClick={()=> scrollToContactMe()}>
                        <div class="original">LETS-CONNECT</div>
                            <div class="letters">
                                <span>L</span>
                                <span>e</span>
                                <span>t</span>
                                <span>s</span>
                                <span>-</span>
                                <span>C</span>
                                <span>o</span>
                                <span>n</span>
                                <span>n</span>
                                <span>e</span>
                                <span>c</span>
                                <span>t</span>
                            </div>
                        </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}