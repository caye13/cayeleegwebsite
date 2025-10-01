import type { Metadata } from "next"
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../styles/globals.css"
import Footer from '../components/NotesFooter';
import Cursor from '../components/Cursor';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"],
})

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Caye Lee",
  description: "Studying Computer Science and Business Administration at the University of Southern California. Contributing to Dr. Mayank Kejriwal's Studies in Global Human Trafficking at USC ISI. Currently coding: CNN Computer Vision Satellite Image Analysis to Combat Human Trafficking. Site created by Caye Lee",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/caye13/my-website-photos/main/beeicon.png" type="image/png"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=mail" />
        {/* <meta name="description" content="Studying Computer Science and Business Administration at the University of Southern California. Contributing to Dr. Mayank Kejriwal's Studies in Global Human Trafficking at USC ISI. Currently coding: CNN Computer Vision Satellite Image Analysis to Combat Human Trafficking." /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body
        className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}
      >
        {/* <Cursor /> */}
        <main className="flex-grow">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}