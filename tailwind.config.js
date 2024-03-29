// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef

export default {
    content: ["src/**/*.{html,js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            placeSelf: {
                "start-end": "start end",
            },
            colors: {
                veryDark: "#080808",
                background: "#111111",
                primary: colors.amber["700"],
                secondary: colors.neutral,
                slate: colors.slate,
                gray: colors.gray,
                neutral: {
                    ...colors.neutral,
                    800: "#282828",
                    900: "#1d1d1d",
                },
                stone: colors.stone,
                red: colors.red,
                lime: colors.lime,
                orange: colors.orange,
                pink: colors.pink,
                purple: colors.purple,
                yellow: {
                    ...colors.yellow,
                    400: "#F1D302",
                },
                green: {
                    ...colors.green,
                    500: "#7EF049",
                    600: "#65c53a",
                    700: "#469123",
                    800: "#397a1b",
                    900: "#255908",
                },
                cyan: colors.cyan,
                sky: colors.sky,
                blue: {
                    ...colors.blue,
                    500: "#4287f5",
                },
            },
            animation: {
                "spin-slow": "spin 1.5s linear infinite",
            },
        },
    },
    plugins: [],
};
