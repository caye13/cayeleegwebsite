import React from 'react'
import NavBar from '../../components/NavBar'
import '../../styles/interestspage.css'
import Footer from '@/components/HomePageFooter'
import Link from 'next/link'
import Image from 'next/image';
import { MdHeight } from 'react-icons/md'
import BandEvents from '../../components/BandEvents';
import '../../styles/bandevents.css'
import WoodworkingSection from "../../components/WoodworkingSection"

const InterestsPage = () => {
    return (
        <section>
            <section className="mx-auto text-center interestsPageNav">
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
                            <Image
                                src="https://raw.githubusercontent.com/caye13/my-website-photos/main/hands1.jpeg"
                                alt="holding hands"
                                width={500} 
                                height={300}
                            />
                            <Image
                                src="https://raw.githubusercontent.com/caye13/my-website-photos/main/hummingbirds.png"
                                alt="hummingbirds for wb"
                                width={500} 
                                height={300}
                            />
                            <Image
                                src="https://raw.githubusercontent.com/caye13/my-website-photos/main/handscc.png"
                                alt="holding hands cc"
                                width={250} 
                                height={250}
                            />
                            <Image
                                src="https://raw.githubusercontent.com/caye13/my-website-photos/main/stag.png"
                                alt="stag and a doe for dad"
                                width={400} 
                                height={300}
                            />
                            <Image
                                src="https://raw.githubusercontent.com/caye13/my-website-photos/main/horse.png"
                                alt="first sketch of a horse"
                                width={300} 
                                height={300}
                            />
                            <Image
                                src="https://raw.githubusercontent.com/caye13/my-website-photos/main/lion.png"
                                alt="lion sketch"
                                width={300} 
                                height={300}
                            />
                            {/* Images scattered on desktop / slider on mobile */}
                        </div>
                    </section>

                    <section className="violinDiv">
                        <div className="violinContent">
                            <div className='text'>
                                <h1>Violin Repertoire</h1>
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
                    {/* <section className='spotifyProfile'>
                        <h2>Music</h2>
                        <h3>Love music lmk what you think</h3>
                        <div className='playlists'>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/6DaWOBh6ZRW05u3L0lNVov?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7LTfLWQngooOoynqWfbfdK?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </section> */}
                    <section className="musicDiv">   
                        <div className="bandContent">
                            {/* <h1>Band Sanitizer</h1>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2JFiCfrdVjTJC1GSRsUnd0?utm_source=generator" width="100%" height="152" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/2Pqjm1Ovy3M61VHWKstCs4?utm_source=generator" width="100%" height="152" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6fFLo3AAfvS0hNhcgu33mu?utm_source=generator" width="100%" height="352" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <h2>Band Santatizer Holiday Single</h2>
                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/0SzqE6846tpmUwEjh4ysac?utm_source=generator" width="100%" height="152" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                           
                            */}
                            <h1>BAND SANITIZER</h1>
                            <div className="main-grid">
                                <div className="left-column">
                                    <div className="spotify-embed">
                                        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/2JFiCfrdVjTJC1GSRsUnd0?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    </div>
                                    <h3>PRODUCER, GUITARIST, VOCALIST</h3>
                                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                        <a href="https://sanitizer.bandcamp.com/track/when-you-sleep" className="bandcamp-text-link">Listen on Bandcamp</a>
                                    </div>
                                    
                                    <div className="social-links">
                                        <a href="mailto:band.sanitizer.official@gmail.com?subject=Band%20Sanitizer%20T%20Shirt%20purchase" className="social-link email-link" aria-label="email">
                                            <span className="material-symbols-outlined">mail</span>
                                        </a>
                                        
                                        <a href="https://sanitizer.bandcamp.com/releases" className="social-link bandcamp-link" aria-label="bandcamp">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1792">
                                                <path d="M1070 1178l306-564H722l-306 564h654zm722-282q0 182-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348z" fill="#2B6C64"/>
                                            </svg>
                                        </a>
                                        
                                        <a href="https://open.spotify.com/artist/2vGPTwErwRJiM4D1OVl6xE" className="social-link spotify-link" aria-label="spotify">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                                            </svg>
                                        </a>
                                        
                                        <a href="https://music.apple.com/us/artist/sanitizer/1437204075" className="social-link apple-link" aria-label="apple music">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="right-column">
                                    {/* <h2>Bitchcoin Performing Stacy's Mom</h2> */}
                                    
                                    <div className="polaroid-container">
                                        <div className="polaroid">
                                            <Image src="https://raw.githubusercontent.com/caye13/my-website-photos/main/bitchcoin.JPG" alt="bitchcoin performance" width="500" height="300" />
                                            <div className="polaroid-caption">Stacy's Mom Senior Grad Party 05/28/23</div>
                                        </div>
                                        
                                        <div className="polaroid">
                                            <Image src="https://raw.githubusercontent.com/caye13/my-website-photos/main/valencia.JPEG" alt="valencia show" width="500" height="300" />
                                            <div className="polaroid-caption">Valencia Art Corridor 04/23/22</div>
                                        </div>
                                        
                                        <div className="polaroid">
                                            <Image src="https://raw.githubusercontent.com/caye13/my-website-photos/main/piBar.jpg" alt="pi bar gig" width="500" height="300" />
                                            <div className="polaroid-caption">51 years young at the Pi Bar 02/17/22</div>
                                        </div>
                                        
                                        <div className="polaroid">
                                            <Image src="https://raw.githubusercontent.com/caye13/my-website-photos/main/newFarm.JPG" alt="new farm show" width="500" height="300" />
                                            <div className="polaroid-caption">Halloween at The New Farm 10/30/21</div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div>
                                <BandEvents />
                            </div>
                            <div className="spotifyGrid">
                                <div>
                                    <h2>BAND SANITIZER EP</h2>
                                    {/* <div className="spotify-embed">
                                        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/2Pqjm1Ovy3M61VHWKstCs4?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    </div> 
                                    <div className="spotify-embed">
                                        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6fFLo3AAfvS0hNhcgu33mu?utm_source=generator" width="100%" height="352" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    </div> */}
                                    <div className='spotify-embed'>
                                        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/6F5dYv0UtmgM5hF0mXPAQJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    </div>
                                </div>
                                <div>
                                    <h2>BAND SANITIZER HOLIDAY SINGLE</h2>
                                    <div className="spotify-embed">
                                        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/0SzqE6846tpmUwEjh4ysac?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <WoodworkingSection />
                </div>
            <Footer />
        </section>
      )
}

export default InterestsPage