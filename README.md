# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Adding Tailwind CSS

Install Tailwindcss
npm install -D tailwindcss postcss autoprefixer

Generate postcss.config.js and tailwind.config.js
npx tailwindcss init -p

Add the paths to all of your template files in your tailwind.config.js file

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

# Prettier Tailwind CSS

Install plugin prettier
npm install -D prettier-plugin-tailwindcss

Restart Prettier
npx prettier --write .

# Install React Router

npm install react-router-dom
