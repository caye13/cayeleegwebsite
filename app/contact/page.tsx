import NavBar from '../../components/NavBar'
import '/styles/contact.css'
import React from 'react'

export default function ContactPage() {
const linkColor = '#FBF7F3'; 
  return (
    <section>
        <section className="mx-auto text-center">
            <NavBar />
        </section>
        <div className="contact-page">
            <section>
                <div className="overlay">
                <h1>Feel free to contact me</h1>
                <p>I’d love to hear from you! Reach out with any questions or ideas.</p>
                <div className="flex space-x-7 text-3xl">
                    <a className="icon-glow" href="https://x.com/cayeleeg" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: linkColor }}>
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a className="icon-glow" href="https://www.linkedin.com/in/caye-lee-b21540229/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: linkColor }}>
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="icon-glow" href="https://github.com/caye13" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: linkColor }}>
                        <i className="bi bi-github"></i>
                    </a>
                    <a className="icon-glow" href="mailto:cayeleeg@gmail.com" target='_blank' rel="noopener noreferrer" aria-label="Email" style={{ color: linkColor }}>
                        <i className='bi bi-envelope-fill' style={{ color: linkColor }}></i>
                    </a>
                </div>
            </div>
            </section>
        </div>
    </section>
  );
}

// const ContactPage = () => {
//     return (
//         <section>
//             
//             <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20 text-center">
//                 <header className="font-sourceSans3 font-light text-6xl text-center">
//                     <h1>Feel free to reach out!</h1>
//                 </header>

//                 </section>
//         </section>
//       )
// }

// export default ContactPage