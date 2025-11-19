import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import UploadPage from './pages/UploadPage'
import GalleryPage from './pages/GalleryPage'
import PhotoDetailsPage from './pages/PhotoDetailsPage'


function App() {
return (
<div className="app">
<header className="topbar">
<div className="container">
<h1 className="logo"><Link to="/">Photo Manager</Link></h1>
<nav>
<Link to="/upload" className="btn">Upload</Link>
<Link to="/" className="btn">Gallery</Link>
</nav>
</div>
</header>


<main className="container">
<Routes>
<Route path="/" element={<GalleryPage />} />
<Route path="/upload" element={<UploadPage />} />
<Route path="/photo/:id" element={<PhotoDetailsPage />} />
</Routes>
</main>


<footer className="footer">
<div className="container">&copy; {new Date().getFullYear()} Photo Management App</div>
</footer>
</div>
)
}

export default App 