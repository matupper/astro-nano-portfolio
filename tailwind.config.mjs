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
          // Backgrounds
  "bg-light": "#DDDDDD",     // Alabaster Grey
  "bg-dark": "#3D3D3D",      // Gunmetal

  // Text colors
  "text-primary-light": "rgba(61, 61, 61, 0.75)",   // softened Gunmetal
  "text-primary-dark": "rgba(221, 221, 221, 0.85)", // softened Alabaster

  "text-heading-light": "#3D3D3D", // Gunmetal
  "text-heading-dark": "#DDDDDD",  // Alabaster Grey

  // Accent (Royal Blue)
  "text-accent": "rgba(54, 101, 211, 0.8)",        // Royal Blue
  "text-accent-muted": "#3556AC",  // Sapphire (subtle variant)

  // Borders
  "border-light": "rgba(61, 61, 61, 0.25)",
  "border-dark": "rgba(221, 221, 221, 0.25)",

  "border-light-subtle": "rgba(61, 61, 61, 0.15)",
  "border-dark-subtle": "rgba(221, 221, 221, 0.15)",

  // Hover backgrounds
  "hover-bg-light": "rgba(54, 101, 211, 0.8)",   // Royal Blue
  "hover-bg-dark": "rgba(54, 101, 211, 0.8)",

  "hover-bg-light-strong": "rgba(54, 101, 211, 0.8)",
  "hover-bg-dark-strong": "rgba(54, 101, 211, 0.8)",

  // Link decoration
  "link-decoration-light": "rgba(54, 101, 211, 0.35)",
  "link-decoration-dark": "rgba(54, 101, 211, 0.5)",

  "link-decoration-hover-light": "rgba(54, 101, 211, 0.8)",
  "link-decoration-hover-dark": "rgba(54, 101, 211, 0.8)"
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
