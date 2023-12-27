/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dm:'DM Sans'
      },
      maxWidth:{
        container:'1600px'
      },
      colors:{
        primary:'#262626',
        secondary:'#6d6d6d',
        bg:'#F5F5F3',
        brc:'#979797'
      }
    },
  },
  plugins: [],
}

