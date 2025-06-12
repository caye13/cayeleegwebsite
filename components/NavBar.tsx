// 'use client';
// import React from 'react';
// import { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';

// const NavBar = (): React.ReactElement => {
//     const [isClicked, setIsClicked] = useState(false);
//     const toggleNavBar = () => {
//         setIsClicked(!isClicked);
//     };
//     return (
//         <>
//             <nav className='font-sourceSans3 bg-red-950 w-full z-50 shadow-md'>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16">
//                         <div className="flex items-center">
//                             <div className="flex-shrink-0">
//                                 <a href="/" className="text-white text-2xl font-bold">caye</a>
//                             </div>
//                         </div>
//                         <div className="hidden font-semibold md:flex space-x-4">
//                             <div className="ml-4 flex items-center space-x-6">
//                                 <Link href="/interests" className="text-amber-50 hover:underline rounded-lg p-4 hover:font-bold">
//                                     interests
//                                 </Link>
//                                 <Link href="/photos" className="text-amber-50 hover:underline rounded-lg p-4 hover:font-bold">
//                                     photos
//                                 </Link>
//                                 <Link href="/notes" className="text-amber-50 hover:underline rounded-lg p-4 hover:font-bold">
//                                     notes
//                                 </Link>
//                                 <Link href="/contact" className="text-amber-50 hover:underline rounded-lg p-4 hover:font-bold">
//                                     contact
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className='md:hidden flex items-center'> 
//                             <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-bold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavBar}>
//                                 {isClicked ? (
//                                     <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 ) : (
//                                     <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {isClicked && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                             <a href="/interests" className="text-white hover:underline rounded-lg p-2 block">Interests</a>
//                             <a href="/photos" className="text-white hover:underline rounded-lg p-2 block">Photos</a>
//                             <a href="/notes" className="text-white hover:underline rounded-lg p-2 block">Notes</a>
//                             <a href="/contact" className="text-white hover:underline rounded-lg p-2 block">Contact</a>
//                         </div>
//                     </div>
//                 )}
//             </nav>
//         </>
//     );
// };

// export default NavBar;

'use client';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './../styles/NavBar.module.css';

const NavBar = (): React.ReactElement => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleNavBar = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.logoContainer}>
                            <div className={styles.logoWrapper}>
                                <Link href="/" className={styles.logo}>caye</Link>
                            </div>
                        </div>
                        <div className={styles.desktopMenu}>
                            <div className={styles.menuItems}>
                                <Link href="/interests" className={styles.menuLink}>
                                    interests
                                </Link>
                                <Link href="/photos" className={styles.menuLink}>
                                    photos
                                </Link>
                                <Link href="/notes" className={styles.menuLink}>
                                    notes
                                </Link>
                                <Link href="/contact" className={styles.menuLink}>
                                    contact
                                </Link>
                            </div>
                        </div>
                        <div className={styles.mobileMenuButton}> 
                            <button className={styles.hamburgerButton} onClick={toggleNavBar}>
                                {isClicked ? (
                                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClicked && (
                    <div className={styles.mobileMenu}>
                        <div className={styles.mobileMenuItems}>
                            <Link href="/interests" className={styles.mobileMenuLink}>Interests</Link>
                            <Link href="/photos" className={styles.mobileMenuLink}>Photos</Link>
                            <Link href="/notes" className={styles.mobileMenuLink}>Notes</Link>
                            <Link href="/contact" className={styles.mobileMenuLink}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavBar;