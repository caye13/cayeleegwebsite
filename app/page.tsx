import React from 'react'
import NavBar from '../components/NavBar'
import "../styles/homepage.css"
import ProjectsSection from "../components/ProjectSection";



const HomePage = () => {
  return (
    <section className='homepage'>
        <section className="mx-auto text-center">
            <NavBar />
        </section>
        {/* <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-10"> */}
        {/* <header className="font-sourceSans3"> */}
            <p className='title font-sourceSans3'>CAYE LEE</p>
        {/* </header> */}
        {/* </section> */}
        <section>
            <div className='intro'>
                <h3>I'm a student studying Computer Science, Business Administration, and Mathematics at the University of Southern California.
                    I'm currently exploring the crisscrossing of my interests in cybersecurity and artificial intelligence.
                    <br></br>
                </h3>
            </div>
        </section>
        <section className='projects'>
            <div>       
                <ProjectsSection />    {/* <h2>Projects</h2>
                <ul>
                    <li><a href="https://github.com/cayeleeg/portfolio">Computer Vision Satellite Image Analysis</a></li>
                    <li><a href="">AI Therapist</a></li>
                    <li><a href="https://github.com/cayeleeg/stock-price-predictor">Stock Price Predictor</a></li>
                    <li><a href="https://github.com/cayeleeg/chat-app">Monte Carlo Poker Estimation</a></li>
                    <li><a href="https://github.com/cayeleeg/e-commerce">Spotify Playlist Merger</a></li>
                    <li><a href="https://github.com/cayeleeg/spotify-clone">Personal Website</a></li>
                </ul> */}
            </div>
        </section>
        {/* <section className='skills'>
            <div>
                <h2>Skills</h2>
                <h3>
                    Relevant Coursework:
                    <br></br>
                    <ul>
                        <li>Multivariable Calculus, Differential Equations, Linear Algebra, Statistics and Probability, Discrete Mathematics, Mechanics and Thermodynamics</li>
                        <li>Data Structures and Object-Oriented Programming, Algorithms and Theory of Computing, Principles of Software Engineering, Machine Learning</li>
                        <li>Economics, Financial and Managerial Accounting, Marketing, and Operations Management</li>
                    </ul>
                    <ul>
                        <li>Programming Languages: Python, Java, JavaScript, C++, SQL, R</li>
                        <li>Full Stack Development: HTML, CSS, React, Node.js, Next.js, ExpressJS</li>
                        <li>Mobile Development: React Native, Swift</li>
                        <li>Database Management: MySQL, MongoDB, PostgreSQL</li>
                        <li>Machine Learning: Scikit-learn, TensorFlow</li>
                    </ul>
                </h3>
            </div>
        </section> */}
        {/* <section className='extras'>
            <div>
                <h2>Interests</h2>
                <ul>
                    <li><a href="https://github.com/cayeleeg/portfolio">Portfolio</a></li>
                    <li><a href="https://github.com/cayeleeg/notes">Notes</a></li>
                    <li><a href="https://github.com/cayeleeg/blog">Blog</a></li>
                </ul>
            </div>
        </section> */}
    </section>
  )
}

export default HomePage