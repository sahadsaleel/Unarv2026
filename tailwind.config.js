/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a3a2a',    // Deep Islamic Green
                dark: '#0d1f17',
                gold: '#c8a84b',
                'gold-light': '#f5d78e',
                cream: '#fdf6e3',
                secondary: '#c8a84b', // alias
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                amiri: ['Amiri', 'serif'],
                malayalam: ['Noto Sans Malayalam', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
