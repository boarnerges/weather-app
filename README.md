# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

ReactJS -------------------------------------------------------------------------
00:00:00 Intro
00:00:47 Setup React + Shadcn UI
00:06:42 App Routes and Layout
00:14:49 Hostinger Account Setup
00:17:46 Header Component
00:20:47 Dark / Light Mode Toggle
00:23:38 Setup React Query
00:26:30 API Configuration
00:30:40 API Endpoints
00:42:35 Fetching Current Location
00:56:10 Creating Queries for weather API
01:08:14 Current Weather
01:19:36 Houly Temprature Chart
01:30:16 Weather Details
01:36:43 5 Day Forecast
01:45:52 Search City Popup
01:57:43 Search History
02:12:40 City Page
02:16:55 Add to Favorite
02:28:17 Render Favorites on Dashboard
02:37:47 Deployment ------------------------------------------------------------------------- ⭐
