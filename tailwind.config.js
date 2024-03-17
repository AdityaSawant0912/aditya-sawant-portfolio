/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#242120',
                highlight: '#f8f6f5',
                def: '#bab6b1',
                dim: '#797673',
                vdim: '#494745',
            },

            fontFamily: {
                sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans - serif", "Apple Color Emoji", "Segoe UI Emoji"],
                segoe: ['Segoe UI Local', 'Segoe UI Web (West European)'],
                blanco: ["Blanco", "Blanco-Regular", , "sans-serif"],
            },

            fontSize: {
                default: '16px',
                s: '14px',
                serif: '18px',
            }
        },
    },
    plugins: [],
};
