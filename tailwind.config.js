/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-400": "#240D57",
        "primary-300": "#501FC1",
        "primary-200": "#8456EC",
        "primary-100": "#E87BF8",
        "secondary-300":"#CCB6FF",
        "secondary-200":"#EDE5FF",
        "secondary-100":"#EDE5FF",
        "alert-error-light": "#FFD7E0",
        "alert-error": "#E61445",
        "alert-success-light": "#D3FFE2",
        "alert-success": "#00805E",
        "neutral-600": "#4F4F4F",
        "neutral-500": "#828282",
        "neutral-400": "#BDBDBD",
        "neutral-300": "#E0E0E0",
        "neutral-200": "#F2F2F2",
        "neutral-100": "#FBFAFF"
      }
    },
  },
  plugins: [],
}
