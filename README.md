# 📸 Photo Management App

A simple, clean, React-based photo upload and gallery application built for an internship assignment.
Users can upload images with a title & description, preview them before upload, view them in a gallery, and see full-size details.

This project includes a simulated backend, session-based persistence, and improved UX.

# 🚀 Features
## ✅ Core

Upload photo with title & description

Live preview before uploading

Gallery grid with thumbnails

Full-size photo view with details

Delete photo from gallery

## 🔧 State & Backend

Photos persist across browser refresh

Photos reset when the dev server restarts (simulated backend behavior)

Uses localStorage + sessionStorage logic

No real backend required

## 🎨 UX Enhancements

Fullscreen responsive layout

Smooth fade-in animation for previews

Clean dark theme styling

Loading screen while app initializes

# 🛠️ Tech Stack

React + Vite

React Router DOM (for navigation)

Context API (global state for photos)

localStorage/sessionStorage (lightweight simulated backend)

# 📂 Project Structure
src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   └── PhotoContext.jsx
├── pages/
│   ├── UploadPage.jsx
│   ├── GalleryPage.jsx
│   └── PhotoDetailsPage.jsx
├── components/
│   └── PhotoCard.jsx
└── utils/

# ▶️ Running the Project Locally
1️⃣ Install dependencies
npm install

2️⃣ Run the development server
npm run dev

3️⃣ Open in browser

Visit:

http://localhost:5173

# 📌 Simulated Backend Behavior

This project uses a session-based simulation instead of a real backend:

Action	Result
Browser Refresh	✔ Photos persist
Close & reopen tab	✔ Photos persist
Restart Vite (npm run dev)	❌ Photos reset (new session)

Light/Dark theme toggle

# 👨‍💻 Author

Sriram – React Developer Intern Assignment Submission
