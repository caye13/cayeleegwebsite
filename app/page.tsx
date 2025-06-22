import React from 'react'
import NavBar from '../components/NavBar'
import "../styles/homepage.css"
import ProjectsSection from "../components/ProjectSection";
import Footer from '../components/HomePageFooter';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import Link from 'next/link';

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
                    <p>Other than coding, I seem to have accumulated one too many pastimes for just one person: hiking, producing music, playing solo violin concertos, sketching naturalism, experimenting with neoclassical painting, playing chess... </p>
                    <Link href="/interests" className='font-medium underline'>Take a look</Link>
                </div>
                <Gallery />
            </section>
        </section>
        <Footer />
    </>
  )
}

export default HomePage