import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        harcourts: {
          blue: "#004a99", // Official Harcourts Blue
          darkBlue: "#003366",
          lightGray: "#f4f7f9",
          slate: "#334155",
        },
      },
    },
  },
  plugins: [],
};
export default config;
