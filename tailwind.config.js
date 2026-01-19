/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: '#0D0D0D',
                'stark-white': '#F2F2F2',
                'revolutionary-red': '#D9042B',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
                bengali: ['"Noto Serif Bengali"', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
