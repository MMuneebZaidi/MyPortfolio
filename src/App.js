import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Project } from './components/Projects';
import './components/GaugeCSS.css';
import { ContactME } from './components/ContactMe';
import { Footer } from './components/Footer';
import { useEffect, useState , useRef } from "react";


function App() {
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        if (footerRef.current) {
          const footerRect = footerRef.current.getBoundingClientRect();
          if (footerRect.top < window.innerHeight) {
              setFooterVisible(true);
          } else {
              setFooterVisible(false);
          }
        }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App"> 
      <NavBar scrolled={scrolled} footerVisible={footerVisible}/>
      <Banner/>
      <Skills/>
      <Project/>
      <ContactME/>
      <Footer footerRef={footerRef}></Footer>
    </div>  
  );
}

export default App;
