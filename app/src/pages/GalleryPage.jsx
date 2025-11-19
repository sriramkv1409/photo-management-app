import React from 'react'
import PhotoCard from '../components/PhotoCard'
import { usePhotos } from '../context/PhotoContext'


export default function GalleryPage(){
const { photos } = usePhotos()


return (
<div>
<h2>Gallery</h2>
{photos.length === 0 ? (
<div className="form-card">
<p>No photos yet. Go to <strong>Upload</strong> to add some.</p>
</div>
) : (
<div className="gallery-grid">
{photos.map(photo => (
<PhotoCard key={photo.id} photo={photo} />
))}
</div>
)}
</div>
)
}