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
        <section className='homepage font-sourceSans3'>
            <section className="mx-auto text-center">
                <NavBar />
            </section>
            {/* <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-10"> */}
            {/* <header className="font-sourceSans3"> */}
                <p className='title font-sourceSans3'>CAYE LEE</p>
                <div className='intro'>
                    {/* <p className="text-2xl lg:text-3xl text-400 text-red-950 leading-relaxed tracking-relaxed">
                        I'm a student studying Computer Science and Business Administration at the University of Southern California.
                    </p> */}
                    <ul className="" style={{ paddingLeft: "3rem", listStyleType: "circle" }}>
                        <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed">
                            Studying Computer Science and Business Administration at the University of Southern California
                        </li>
                        <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed">
                            <strong>Contributing to Dr. Mayank Kejriwal's Studies in Global Human Trafficking at USC ISI</strong>
                            {/* <strong>Collaborating with Dr. Mayank Kejriwal at USC ISI utilizing NLP and CV on Studies in Global Human Trafficking</strong> */}
                        </li>
                        <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed">
                            Currently coding: CV Satellite Image Analysis, Kaidate, <Link href="https://www.blendify.app/" className='font-medium underline'>spotify blender</Link>
                            {/* <br></br>
                            In the backlog: poker simulator */}
                        </li>
                        {/* <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed">
                            Exploring the crisscrossing of CV/analyzing images and NLP/summarizing privacy policies
                        </li> */}
                        <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed"> 
                            Working my way through pwn.college hacking courses
                        </li>
                        {/* <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed">
                            Finding time to sketch and expand my musical repertoire
                        </li> */}
                        <li className="text-lg lg:text-2xl text-red-950 font-300 leading-relaxed">
                            Finding time for all of my <Link href="/interests" className='font-medium underline'>interests</Link>
                        </li>
                    </ul>
                </div>
            {/* </header> */}
            {/* </section> */}
            <section className='projects font-sourceSans3'>
                <div>       
                    <ProjectsSection /> 
                </div>
            </section>
            <AboutSection />
            <section className='extras'>
                <div>
                    <h2>Extras</h2>
                    <p>Other than coding, I seem to have accumulated one too many pastimes for just one person: tennis, producing music, playing violin concertos, sketching naturalism, hiking, experimenting with neoclassical painting, playing chess... </p>
                    <Link href="/interests" className='font-medium underline'>TAKE A LOOK!</Link>
                </div>
            </section>
            <Gallery />
        </section>
        <Footer />
    </>
  )
}

export default HomePage