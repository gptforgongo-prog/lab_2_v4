import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx'; 
import Header from './components/Header.jsx';
import Objective from './components/Objective.jsx'
export default function App(){
    return(
          <div>
            <Header />
            <Objective />
            <AboutMe />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </div>
    )
}
