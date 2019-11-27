const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-variables')({
            globals: {
                background: '#f7fafc'
            }
        }),
        require('autoprefixer'),
        purgecss({
            content: ['./*.html']
        }),
    ]
};
