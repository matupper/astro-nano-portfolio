import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Custom theme colors - modify these to change your site's color scheme
        // 
        // Option 1: Use hex values directly
        // Option 2: Use Tailwind's default color palette (e.g., defaultTheme.colors.slate[100])
        // Option 3: Use any Tailwind color name (e.g., "slate-100", "blue-500", etc.)
        //
        // Examples:
        // - For a blue theme: "bg-light": "#eff6ff", "bg-dark": "#1e3a8a"
        // - For a green theme: "bg-light": "#f0fdf4", "bg-dark": "#14532d"
        // - For a purple theme: "bg-light": "#faf5ff", "bg-dark": "#581c87"
        // - Use Tailwind colors: "bg-light": defaultTheme.colors.slate[100]
        theme: {
          // Background colors
          "bg-light": "#f5f5f4",   // light mode background (stone-100 equivalent)
          "bg-dark": "#1c1917",   // dark mode background (stone-900 equivalent)
          
          // Text colors
          "text-primary-light": "rgba(0, 0, 0, 0.5)",      // light mode primary text
          "text-primary-dark": "rgba(255, 255, 255, 0.75)", // dark mode primary text
          "text-heading-light": "#000000",                  // light mode headings (full black)
          "text-heading-dark": "#ffffff",                   // dark mode headings (full white)
          
          // Border colors
          "border-light": "rgba(0, 0, 0, 0.15)",           // light mode borders
          "border-dark": "rgba(255, 255, 255, 0.2)",       // dark mode borders
          "border-light-subtle": "rgba(0, 0, 0, 0.1)",     // light mode subtle borders
          "border-dark-subtle": "rgba(255, 255, 255, 0.1)", // dark mode subtle borders
          
          // Hover background colors
          "hover-bg-light": "rgba(0, 0, 0, 0.05)",         // light mode hover background
          "hover-bg-dark": "rgba(255, 255, 255, 0.05)",    // dark mode hover background
          "hover-bg-light-strong": "rgba(0, 0, 0, 0.1)",   // light mode strong hover
          "hover-bg-dark-strong": "rgba(255, 255, 255, 0.1)", // dark mode strong hover
          
          // Link decoration colors
          "link-decoration-light": "rgba(0, 0, 0, 0.15)",  // light mode link underline
          "link-decoration-dark": "rgba(255, 255, 255, 0.3)", // dark mode link underline
          "link-decoration-hover-light": "rgba(0, 0, 0, 0.25)", // light mode link hover
          "link-decoration-hover-dark": "rgba(255, 255, 255, 0.5)", // dark mode link hover
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
