module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridAutoColumns: ['hover', 'focus'],
            gridAutoColumns: false,
            gridAutoColumns: {
                '2fr': 'minmax(0, 2fr)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}