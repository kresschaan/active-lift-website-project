/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-nav": "rgb(var(--primary-nav)/ .56)",
                "primary-1": "rgb(var(--primary-1))",
                "primary-2": "rgb(var(--primary-2))",
                "primary-gray-1": "rgb(var(--primary-gray-1))",
                "primary-gray-2": "rgb(var(--primary-gray-2))",
                "primary-gray-3": "rgb(var(--primary-gray-3))",
                "primary-gray-4": "rgb(var(--primary-gray-4))",
                "primary-gray-5": "rgb(var(--primary-gray-5))",
                outline: "rgb(var(--outline))",
                "tertiary-1": "rgb(var(--tertiary-1))",
            },
            fontFamily: {},
        },
        fontFamily: {
            "pt-sans": ["sans", "PTSans-Regular"],
            "pt-sans-bold": ["sans", "PTSans-Bold"],
            "pt-serif": ["serif", "PTSerif-Regular"],
            "pt-serif-italic": ["serif", "PTSerif-Italic"],
        },
        backgroundImage: {
            feature:
                "linear-gradient(rgb(174, 177, 182, 0), rgb(174, 177, 182, 0), rgba(174, 177, 182))",
        },
        boxShadow: {
            "3xl": "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        },
    },
    plugins: [],
};
