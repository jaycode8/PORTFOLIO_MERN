/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "phones": "400px"
            },
            backgroundImage: {
                "landing": "url(/src/resources/images/landing.jpg)",
                "landing2": "url(/src/resources/images/landing2.jpg)"
            },
            backgroundColor: {
                "darken": "#12121299",
                "about": "#20272f",
                "bgColor": "#202725"
            },
            colors: {
                "primary": "#2ad883",
                "shades": "#ccc"
            },
            boxShadow: {
                "custom": "0 0 2px #fff",
                "custom2": "0 0 5px #2ad883"
            },
            fontSize: {
                "tiny": "0.8rem",
                "1rem": "1rem",
                "2": "2rem",
                "3.5": "3.5rem"
            },
            height: {
                "30rem": "30rem"
            },
            width: {
                "35rem": "35rem",
                "30rem": "30rem"
            },
            gridTemplateColumns: {
                "1fr1.5fr": "1fr 1.5fr",
                "services-grid": "repeat(auto-fit, minmax(15rem, 17rem))"
            },
            fontFamily: {
                borsok: ["borsok"],
                cookie: ["cookie"],
                righteous: ["Righteous"]
            },
            borderWidth: {
                "1": "1px"
            },
            borderRadius: {
                "round": "50%"
            }
        },
    },
    plugins: [],
}

