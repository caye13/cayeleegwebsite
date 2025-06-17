import React from 'react'
import '../../styles/photospage.css'
import NavBar from '../../components/NavBar'
// import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'

const PhotosPage = () => {
    return (
        <section>
            <div className="fog-container">
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
                <div className="fog-layer"></div>
            </div>
            <section className="photospage">
                <section className="mx-auto text-center photospageNavBar">
                    <NavBar />
                </section>
                <section className="photospageHeader mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center">
                <header className="font-sourceSans3 font-light text-6xl text-center">
                    <h1>photo gallery</h1>
                </header>
            </section>
            </section>
            
        </section>
    )
}

export default PhotosPage