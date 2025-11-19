import React from 'react'
import { Link } from 'react-router-dom'


export default function PhotoCard({photo}){
return (
<div className="card">
<Link to={`/photo/${photo.id}`} style={{textDecoration:'none', color:'inherit'}}>
<img src={photo.imageUrl} alt={photo.title} />
<div className="meta">
<h3>{photo.title || 'Untitled'}</h3>
<p>{photo.description || 'No description'}</p>
</div>
</Link>
</div>
)
}