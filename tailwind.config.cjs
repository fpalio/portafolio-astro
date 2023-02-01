/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-green-bg": "#081710",
        "brand-gree": "#3BA576",
      },
    },
  },
  plugins: [],
};
