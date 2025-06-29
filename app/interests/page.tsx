import React from 'react'
import NavBar from '../../components/NavBar'
import '../../styles/interestspage.css'
import Footer from '@/components/HomePageFooter'
import Link from 'next/link'

const InterestsPage = () => {
    return (
        <section>
            <section className="mx-auto text-center">
                <NavBar />
            </section>
            {/* <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center"> */}
                {/* <header className="font-sourceSans3 font-light text-6xl text-center text-[#465f46]"> */}
                    {/* <h1>put some sketches, paintings, woodworking projects, violin, band, jets, etcs on here</h1> */}
                {/* </header> */}

                {/* </section> */}
                <div className='interestsPage'>
                    <section className="artDiv">
                        <div className="scrapbookContainer">
                            {/* Images scattered on desktop / slider on mobile */}
                        </div>
                        </section>

                        <section className="violinDiv">
                        <div className="violinContent">
                            <div className='text'>
                                <h1>Violin Repertoire</h1>
                                <h2>Solos and Concertos</h2>
                                    <h3>Praeludium and Allegro in the Style of Pugnani</h3>
                                        <p>Composer: Fritz Kreisler</p>
                                    <h3>Butterfly Lovers Violin Concerto: V. Lagrimoso & VII. Adagio Cantabile</h3>
                                        <p>Composer: He Zhanhao and Chen Gang</p>
                                    <h3>The Gael "The Last of the Mohicans"</h3>
                                        <p>Composer: Trevor Jones and Randy Edelman</p>
                                    <h3>Violin Concerto in A Minor, BWV 1041: I. Allegro</h3>
                                        <p>Composer: Johann Sebastian Bach</p>
                                    <h3>Violin Concerto No. 2 in D Major, K. 211: I. Allegro</h3>
                                        <p>Composer: Wolfgang Amadeus Mozart</p>
                                    <h3>Violin Concerto No. 3 in G Major, K. 216: I. Allegro</h3>
                                        <p>Composer: Wolfgang Amadeus Mozart</p>   
                                    <h3>Violin Concerto No. 4 in D Major, K. 218: I. Allegro</h3>
                                        <p>Composer: Wolfgang Amadeus Mozart</p>
                                    <h3>Violin Concerto No. 5 in A Major, K. 219: I. Allegro</h3>
                                        <p>Composer: Wolfgang Amadeus Mozart</p>
                                    <h3>Violin Concerto in A Minor RV 356 Op. 3 No 6</h3>
                                        <p>Composer: Antonio Vivaldi</p>
                                    <h3>Violin Concerto in G Minor RV 315 Op. 8 No 2 "Summer"</h3>
                                        <p>Composer: Antonio Vivaldi</p>
                            </div>
                            {/* Floating text block with violin pieces */}
                        </div>
                        </section>

                        <section className="musicDiv">
                        <div className="bandContent">
                            <h2>Band Sanitizer</h2>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2JFiCfrdVjTJC1GSRsUnd0?utm_source=generator" width="100%" height="152" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/2Pqjm1Ovy3M61VHWKstCs4?utm_source=generator" width="100%" height="152" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6fFLo3AAfvS0hNhcgu33mu?utm_source=generator" width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <h2>Band Santatizer Holiday Single</h2>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/0SzqE6846tpmUwEjh4ysac?utm_source=generator" width="100%" height="152" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <Link href="https://sanitizer.bandcamp.com/track/when-you-sleep" className="bandLink"><span>Listen on Bandcamp</span></Link>
                            {/* YouTube embeds and Bandcamp links */}
                        </div>
                    </section>
                </div>
            {/* <Footer /> */}
        </section>
      )
}

export default InterestsPage