import React, { createContext, useContext, useState, useEffect } from 'react'

const PhotoContext = createContext()

export function PhotoProvider({ children }) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)


  const SESSION_KEY="photo_app_session_started"
  const STORAGE_KEY="photo_app_saved_photos"

  useEffect(() => {
    const sessionStarted = sessionStorage.getItem(SESSION_KEY)

    if (!sessionStarted) {
  
      localStorage.removeItem(STORAGE_KEY)
      sessionStorage.setItem(SESSION_KEY, "active")
      setPhotos([])
      setLoading(false)
    } else {

      const saved = localStorage.getItem(STORAGE_KEY)
      setPhotos(saved ? JSON.parse(saved) : [])
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos))
    }
  }, [photos, loading])

  function addPhoto(photo) {
    setPhotos(prev => [photo, ...prev])
  }

  function getPhotoById(id) {
    return photos.find(p => p.id === id)
  }

  function removePhoto(id) {
    setPhotos(prev => prev.filter(p => p.id !== id))
  }

  return (
    <PhotoContext.Provider value={{ photos, loading, addPhoto, getPhotoById, removePhoto }}>
      {loading ? (
        <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>
      ) : (
        children
      )}
    </PhotoContext.Provider>
  )
}

export function usePhotos() {
  return useContext(PhotoContext)
}
