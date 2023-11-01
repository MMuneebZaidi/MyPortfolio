import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import RYSBase from '../assets/images/RYSBase.webp';
import MP from '../assets/images/MusicPlayer.jpg';
import HCMS from '../assets/images/HCMS.jpg';
export const Project = ()=>{
    const projects = [
        {
            title: "Ride Your Style",
            description: "Java Windows Application",
            Base: RYSBase,  
        },
        {
            title: "Music Player",
            description: "JavaFX Windows Application",
            Base: MP,
        },
        {
            title: "Health Centre Management System",
            description: "DB + SDLC Documentation",
            Base: HCMS,
        },
    ];
    return(
        <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={0.01}>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__lightSpeedIn": ""}>
                        <div className="backgroundP"></div>
                        <h2>Projects</h2>
                        <p>Mastering a toolkit of tech skills, Turning ideas into digital reality.</p>            
                        <section class="carousel2">
                            <h2 class="categories__title">Library</h2>
                            <div class="carousel__container">
                            
                                <div class="carousel-items">
                                    <a href="https://github.com/MMuneebZaidi/RideYourStyle">
                                        <img
                                            class="carousel-item__img"
                                            src={projects.at(0).Base}
                                            alt=""
                                        />
                                        <div class="carousel-item__details">
                                            <div class="controls">
                                                <span class="fas fa-play-circle"></span>
                                                <span class="fas fa-plus-circle"></span>
                                            </div>
                                            <div className="tittle-subtitle">
                                                <h5 class="carousel-item__details--title">{projects.at(0).title}</h5>
                                                <h6 class="carousel-item__details--subtitle">{projects.at(0).description}</h6>
                                            </div>
                                            <div className="proj-inside">
                                                <p>Download Documentation</p>
                                                <a class="BtnDown" href="Ride Your Style.pdf" download={"Ride Your Style Documentation"}>
                                                <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                                <span class="icon2"></span>
                                                <span class="tooltip">Download</span>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-items">
                                    <a href="https://github.com/MMuneebZaidi/MusicPlayer">
                                        <img
                                            class="carousel-item__img"
                                            src={projects.at(1).Base}
                                            alt=""
                                        />
                                        <div class="carousel-item__details">
                                            <div class="controls">
                                                <span class="fas fa-play-circle"></span>
                                                <span class="fas fa-plus-circle"></span>
                                            </div>
                                            <div className="tittle-subtitle">
                                                <h5 class="carousel-item__details--title">{projects.at(1).title}</h5>
                                                <h6 class="carousel-item__details--subtitle">{projects.at(1).description}</h6>
                                            </div>
                                            <div className="proj-inside">
                                                <p>Download Documentation</p>
                                                <a class="BtnDown" href="Music Player.pdf" download={"Music Player Documentation"}>
                                                <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                                <span class="icon2"></span>
                                                <span class="tooltip">Download</span>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-items">
                                    <a href="https://github.com/MMuneebZaidi/Health-Center-Management-System-SEC-">
                                        <img
                                            class="carousel-item__img"
                                            src={projects.at(2).Base}
                                            alt=""
                                        />
                                        <div class="carousel-item__details">
                                            <div class="controls">
                                                <span class="fas fa-play-circle"></span>
                                                <span class="fas fa-plus-circle"></span>
                                            </div>
                                            <div className="tittle-subtitle">
                                                <h5 class="carousel-item__details--title">{projects.at(2).title}</h5>
                                                <h6 class="carousel-item__details--subtitle">{projects.at(2).description}</h6>
                                            </div>
                                            <div className="proj-inside">
                                                <p>Download Documentation</p>
                                                <a class="BtnDown" href="HCMS Documentation.pdf" download={"HCMS Documentation"}>
                                                <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                                <span class="icon2"></span>
                                                <span class="tooltip">Download</span>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </div>     
                            </div>
                        </section>      
                </div>
                }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    )
}