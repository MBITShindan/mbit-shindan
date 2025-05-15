// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                breathe1: 'breathe 3s ease-in-out infinite',
                breathe2: 'breathe 4s ease-in-out infinite',
                breathe3: 'breathe 5s ease-in-out infinite',
            },
        keyframes: {
            breathe: {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.08)' },
            },
        },
        },
    },
}
