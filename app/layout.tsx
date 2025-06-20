import type { Metadata } from "next"
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google"
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
  description: "Created by Caye Lee",
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
      </head>
      <body
        className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}
      >
        {/* <Cursor /> */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}