import { Container, Col, Row } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';
import CanvasComponent from "./CanvasComponent";
export const Banner = ()=>{
    const scrollToContactMe = () => {
        const contactMeSection = document.getElementById('connect');
        if (contactMeSection) {
          contactMeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <section className="banner" id="homepage">
             <Container>
                <Row className="aligh-items-centre bnnr">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Muhammad Muneeb Zaidi`} </h1>
                            <p>As a dedicated Computer Science student, I've gathered here a collection of projects and work that represent my passion for coding and problem-solving. Explore my journey through the world of software development and discover the solutions I've crafted to address real-world challenges. This digital space is a showcase of my technical skills and the results of my commitment to the art of programming.</p>
                            <h2>{`Ready to Transform Ideas into Reality? Get in Touch!`} </h2>
                            <button href='#connect' class="button" onClick={()=> scrollToContactMe()}>
                                <span class="button_lg">
                                    <span class="button_sl"></span>
                                    <span class="button_text">Contact Me</span>
                                </span>
                            </button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn canvasBanner" : ""}>
                                <CanvasComponent/>
                            </div>
                        }
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}