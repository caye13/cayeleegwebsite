import { Cormorant } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google';
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                cormorantGaramond: ["var(--font-cormorant-garamond)", "serif"],
                sourceSans3: ["var(--font-source-sans-3)", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config