import { Col,Row } from "react-bootstrap"
import github from '../assets/images/github.png';
import insta from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
export const Footer = ({ footerRef }) => {
    return(
        <section ref={footerRef} className="footer">
            <div className="footer-panel">
                        <Col>
                            <div className="navi-panel">
                                <Row>
                                    <h1>Navigate To</h1>
                                </Row>
                                <Row>
                                    <a className="bottom-nav-buttons" href="#homepage">Home</a>
                                </Row>
                                <Row>
                                    <a className="bottom-nav-buttons" href="#skills">Skills</a>
                                </Row>
                                <Row>
                                    <a className="bottom-nav-buttons" href="#projects">Projects</a>
                                </Row>
                            
                            </div>
                        </Col>
                        <Col>
                            <div className="social-panel">
                                <Row>
                                    <h1>Social Links</h1>
                                </Row>
                                <Row>
                                    <div className="social-distance"><img src={github} className="footer-social" alt="" ></img>:<a href="https://github.com/MMuneebZaidi" className="bottom-nav-buttons" >Github</a></div>
                                </Row>
                                <Row>
                                    <div className="social-distance"><img src={linkedin} className="footer-social" alt="" ></img>:<a href="https://www.linkedin.com/in/muneeb-zaidi-14190b245/" className="bottom-nav-buttons" >LinkedIn</a></div>
                                </Row>
                                <Row>
                                    <div className="social-distance"><img src={insta} className="footer-social" alt="" ></img>:<a href="https://www.instagram.com/muneebayyyyy._/" className="bottom-nav-buttons" >Instagram</a></div>
                                </Row>
                                <Row>
                                    <div className="social-distance"><img src={twitter} className="footer-social" alt="" ></img>:<a href="https://twitter.com/MuneebR08206482" className="bottom-nav-buttons" >Twitter</a></div>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="contact-panel">
                                <Row>
                                    <h1>Contact Me</h1>
                                </Row>
                                <Row>
                                    <div><span className="contact-span-start">Email</span> <span className="contact-span">:</span> <span className="bottom-nav-buttons" >muneebzaidi2345@gmail.com</span></div>
                                </Row>
                                <Row>
                                    <div><span className="contact-span-start">Phone No.</span> <span className="contact-span">:</span> <span className="bottom-nav-buttons" >+92-325-8444647</span>
                                    <br></br><span className="bottom-contact-buttons" >+92-325-8444647</span></div>
                                </Row> 
                                
                            </div>
                        </Col>
                    
            </div>
            <p className="copyright">© Copyright, All Rigths Reserved.</p>
        </section>
    )
}