import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import 'animate.css';
import emailjs from '@emailjs/browser';
export const ContactME = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = async (e) => {
        if(formDetails.firstName===''||formDetails.lastName===''||formDetails.email===''||formDetails.phone===''||formDetails.message===''){
            e.preventDefault();
            setButtonText("Enter Details");
            setFormDetails(formInitialDetails);
            setTimeout(() => { 
                setButtonText("Send");
            }, 3000);
        }else{
            e.preventDefault();
            emailjs.sendForm('service_we6hzs2', 'template_1ngvotj', form.current, 'JehZOlvQJ-6wCC-bf')
            .then((result) => {
                    console.log(result.text);
            }, (error) => {
                    console.log(error.text);
            });
            setButtonText("Sending...");
            setTimeout(() => { 
                setButtonText("Sent!");
                setFormDetails(formInitialDetails);
            }, 3000);
            setTimeout(() => { 
                setButtonText("Send");
            }, 5000);
        }  
    };
    const form = useRef();
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 760);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
            {!isMobile && (
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn contactme" : "hidden"}  />
                }
              </TrackVisibility>
            </Col>
          )}
            <Col size={12} md={6}>
                <TrackVisibility offset={150}>
                {({ isVisible }) =>
                    <div className={`animate__animated ${isVisible ? "animate__zoomIn" : "animate__zoomOut"}`}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                        <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} name="First_Name" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} name="Last_Name" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} name="Email_Address" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} name="Phone_No" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                        </Col>
                        <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} name="Message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                    </Row>
                    </form>
                    
                </div>
                
                }
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
    </section>
    )
}