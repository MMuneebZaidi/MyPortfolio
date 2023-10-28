import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import ProgressBar from './Gauge';
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return(
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> A Showcase of My Proficiencies and Expertise in the World of Technology and Creativity.</p>
                        <Carousel  responsive={responsive} activeIndex={index} onSelect={handleSelect} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Carousel.Item>
                                <div className='rowSkill'>
                                    <ProgressBar title="JAVA" percentage={95} colorClass="shadow-java" />
                                    <ProgressBar title="C #" percentage={90} colorClass="shadow-csharp" />
                                    <ProgressBar title="C/C++" percentage={90} colorClass="shadow-ccpp" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='rowSkill'>
                                        <ProgressBar title="SDLC" percentage={85} colorClass="shadow-sdlc" />
                                        <ProgressBar title="SQL DB" percentage={80} colorClass="shadow-sql" />
                                        <ProgressBar title="OOP" percentage={90} colorClass="shadow-oop" />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='rowSkill'>
                                        <ProgressBar title="NODE" percentage={75} colorClass="shadow-node" />
                                        <ProgressBar title="REACT" percentage={75} colorClass="shadow-react" />
                                        <ProgressBar title="CSS" percentage={70} colorClass="shadow-css" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}