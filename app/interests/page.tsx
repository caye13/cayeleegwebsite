import React from 'react'
import NavBar from '../../components/NavBar'

const InterestsPage = () => {
    return (
        <section>
            <section className="mx-auto text-center">
                <NavBar />
            </section>
            <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center">
                <header className="font-sourceSans3 font-light text-6xl text-center">
                    <h1>Here are some of my interests</h1>
                </header>

                </section>
        </section>
      )
}

export default InterestsPage