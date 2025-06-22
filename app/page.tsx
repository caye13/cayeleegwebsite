import React from 'react'
import NavBar from '../components/NavBar'
import "../styles/homepage.css"
import ProjectsSection from "../components/ProjectSection";
import Footer from '../components/HomePageFooter';
import AboutSection from '../components/AboutSection';

const HomePage = () => {
  return (
    <>
        <section className='homepage'>
            <section className="mx-auto text-center">
                <NavBar />
            </section>
            {/* <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-10"> */}
            {/* <header className="font-sourceSans3"> */}
                <p className='title font-sourceSans3'>CAYE LEE</p>
            {/* </header> */}
            {/* </section> */}
            <AboutSection />
            <section className='projects'>
                <div>       
                    <ProjectsSection /> 
                </div>
            </section>
            <section className='extras'>
                <div>
                    <h2>Extras</h2>
                    <p>When I'm not coding, I hike, produce music, play solo violin concertos, sketch naturalism, play chess, and more.</p>
                </div>
            </section>
        </section>
        <Footer />
    </>
  )
}

export default HomePage