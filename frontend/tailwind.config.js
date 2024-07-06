/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FFF",
        "bg-secondary": "#F1F2F6",
        "primary": "#757D8A",
        "secondary": "#404D61",
        "btn-primary": "#5B6AD0",
        "danger": "#F63F3F",
        "info": "#0064FF",
        "warning": "#F9A348",
        "success": "#44C5E2",
        "stroke-primary": "#757D8A",
        "stroke-secondary": "#E0E0E0",
        "card-primary": "#F8F8F8",
        "table-heading": "#B1B1B1"
      },
      borderRadius: {
        "10": "10px"
      }
    },
  },
  plugins: [],
}