Generation T Travel — Luxury Travel Solution

A modern, responsive, multi-page web application for a luxury travel agency. Built with Vite, vanilla JavaScript, and modern SCSS featuring glassmorphic UI elements, input masking, and robust form validation.

🚀 Features

Multi-Page Architecture: Dedicated pages for homepage (index.html), tour details (details.html), tour listings (tours.html), and contact form (contact.html).

Interactive Tour Search & Filtering: Filter trips by destination, date, and tour types directly from the search section.

Form Validation & Phone Masking:

Integrated IMaskJS with fixed-format Ukraine phone input (+38 (000) 00-00-00) and continuous placeholder visibility (lazy: false).

Real-time digit extraction (replace(/\D/g, '')) for accurate phone number validation.

Custom UI feedback with error messages and dynamic state styling.

Glassmorphism Design:

Frosted glass aesthetic with backdrop blur effects (backdrop-filter: blur(16px)).

Accessible design practices (semantic HTML elements and appropriate alt tags).

Vite-Powered Build System:

Fast HMR (Hot Module Replacement) during development.

Root-relative asset resolution for flawless production deployment.

🛠️ Tech Stack

Build Tool: Vite

Pre-processor: SCSS

Languages: JavaScript (ES6+), HTML5, CSS3

Libraries: IMask.js (Phone input masking)

📁 Project Structure

LUXURY-TRAVEL/
├── dist/                # Production build output
├── public/              # Static assets
├── src/
│   ├── fonts/           # Custom web fonts
│   ├── img/             # Project images & icons
│   ├── js/              # JavaScript scripts (forms, UI logic)
│   └── scss/
│       ├── _settings.scss # Variables, mixins & reset configurations
│       └── style.scss    # Main entry stylesheet
├── .gitignore
├── contact.html         # Contact page
├── details.html         # Tour details page
├── index.html           # Main landing page
├── tours.html           # Tours catalog page
├── package.json
├── package-lock.json
└── vite.config.js       # Vite configuration


📝 License

Developed by Stanislav Aloshyn for Generation T Travel.