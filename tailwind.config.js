module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                "pattern-intro": "url('/images/bg-pattern-intro.svg')",
                "pattern-circle": "url('/images/bg-pattern-circles.svg')",
            },

            colors: {
                "lightred-300": "hsl(13, 100%, 72%)",
                "lightred-400": "hsl(355, 100%, 74%)",
                "lightred-500": "hsl(356, 100%, 66%)",
                "lightred-600": "hsl(353, 100%, 62%)",

                "darkblue-500": "hsl(237, 17%, 21%)",
                "darkblue-700": "hsl(237, 23%, 32%)",
                "darkblue-900": "hsl(240, 10%, 16%)",
            },
            fontFamily: {
                Overpass: ["Overpass", "sans-serif"],
                ubuntu: ["Ubuntu", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
