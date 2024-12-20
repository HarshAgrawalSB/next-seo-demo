/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure it picks up all content in the app directory
    './components/**/*.{js,ts,jsx,tsx}',  // Include components if they are outside app/
    './pages/**/*.{js,ts,jsx,tsx}',  // If you still have the pages directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

