import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { usePhotos } from '../context/PhotoContext'

export default function PhotoDetailsPage() {
  const { id } = useParams()
  const { getPhotoById, removePhoto } = usePhotos()
  const navigate = useNavigate()

  const photo = getPhotoById(id)

  if (!photo) {
    return (
      <div className="form-card">
        <p>Photo not found.</p>
        <button className="btn-primary" onClick={() => navigate(-1)}>Back</button>
      </div>
    )
  }

  function handleDelete() {
    if (confirm('Delete this photo?')) {
      removePhoto(id)
      navigate('/')
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2>{photo.title || 'Untitled'}</h2>

        <div>
          <button className="btn" onClick={() => navigate(-1)}>Back</button>
          <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="form-card details" style={{ minHeight: "70vh" }}>
        <img src={photo.imageUrl} alt={photo.title} />

        <div className="info">
          <h3>Description</h3>
          <p style={{ color: "var(--muted)" }}>
            {photo.description || "No description provided."}
          </p>
        </div>
      </div>
    </div>
  )
}
