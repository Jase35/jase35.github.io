export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], theme: {
        extend: {
            scrollBehavior: ['smooth']
        }
    }, 
    experimental: {
        cssVariables: true,
    }, plugins: []
};