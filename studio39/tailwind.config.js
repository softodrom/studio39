/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/js/**/*.svelte',
        './resources/pages/**/*.svelte',
    ],
    theme: {
        extend: {
            fontFamily: {
                italianno: ['"Italianno"', 'cursive'],
            },
        },
    },
    plugins: [],
};
