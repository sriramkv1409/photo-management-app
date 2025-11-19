import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePhotos } from '../context/PhotoContext'

export default function UploadPage() {
  const { addPhoto } = usePhotos()
  const navigate = useNavigate()

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [file,setFile] = useState(null)
  const [preview,setPreview] = useState(null)

  function handleFile(e) {
    const f = e.target.files[0]
    if (f) {
      setFile(f)
      setPreview(URL.createObjectURL(f))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!file) {
      alert('Please select an image')
      return
    }

    const id=Date.now().toString()
    const imageUrl= URL.createObjectURL(file)

    const photo ={ id, title, description, imageUrl }
    addPhoto(photo)

    navigate('/')
  }

  return (
    <div className="form-card">
      <h2>Upload Photo</h2>

      <form onSubmit={handleSubmit}>
        
        <div className="field">
          <label>Select an Image</label>
          <input type="file" accept="image/*" onChange={handleFile} />
        </div>

        {preview && (
          <img 
            src={preview} 
            className="preview"
            alt="preview"
          />
        )}

        <div className="field">
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="Enter title"
          />
        </div>

        <div className="field">
          <label>Description</label>
          <textarea 
            rows={4} 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            placeholder="Enter description"
          />
        </div>

        <div style={{ textAlign: 'right' }}>
          <button className="btn-primary" type="submit">Upload</button>
        </div>

      </form>
    </div>
  )
}
