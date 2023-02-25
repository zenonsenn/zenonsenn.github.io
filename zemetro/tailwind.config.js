/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./index.html", "./content.html"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            mono: ["Cascadia Mono", "monospace"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
