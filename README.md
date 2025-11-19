# 📸 Photo Management App
A clean and responsive React-based photo upload & gallery application built for an internship assignment.
Users can upload photos, preview them before submission, view them in a gallery, and open full-sized details.

This project includes a simulated backend, session-based persistence, and enhanced user experience.

# 🚀 Features
## ✅ Core

Upload photos with title & description

Live image preview before uploading

Responsive gallery with thumbnails

Full-size photo details page

Delete photo functionality

## 🔧 State & Backend

Photos persist on browser refresh

Photos reset when dev server restarts (simulated backend)

Uses localStorage + sessionStorage logic

No backend server required

## 🎨 UI/UX Enhancements

Modern dark theme

Smooth fade-in animation for preview

Fullscreen responsive page layout

Clean loading screen

# 🛠️ Tech Stack

React + Vite

React Router DOM

Context API

localStorage / sessionStorage

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
## 1️⃣ Install dependencies
npm install

## 2️⃣ Start the development server
npm run dev

## 3️⃣ Open in browser
http://localhost:5173

# 📌 Simulated Backend Behavior

This project mimics backend behavior using front-end storage logic:

Action	Result
Browser Refresh	✔ Photos persist
Close & Open Tab	✔ Photos persist
Restart Vite (npm run dev)	❌ Photos reset (new session)


# 👨‍💻 Author

Sriram – React Developer Intern Assignment Submission
