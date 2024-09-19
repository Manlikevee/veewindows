import React from 'react'

const Menuicons = () => {
    
    const allicons = [
        {
          "name": "File Explorer",
          "path": "/icons/File_Explorer.png"
        },
        {
          "name": "Gallery",
          "path": "/icons/gallery.png"
        },
        {
          "name": "Music Folder",
          "path": "/icons/Music folder.png"
        },
        {
          "name": "Note",
          "path": "/icons/note.png"
        },
        {
          "name": "Paint",
          "path": "/icons/paint.png"
        },
        {
          "name": "Recycle Bin",
          "path": "/icons/recyclebin.png"
        },
        {
          "name": "Store",
          "path": "/icons/store.png"
        },
        {
          "name": "Video",
          "path": "/icons/video.png"
        },
        {
          "name": "Camera",
          "path": "/icons/camera.png"
        },
        {
          "name": "Download",
          "path": "/icons/download.png"
        }
      ];
  return (
    <div className="grid-container">
    {allicons.map((icon, index) => (
      <div key={index} className="icon-item">
        <img src={icon.path} alt={icon.name} />
        <p>{icon.name}</p>
      </div>
    ))}
  </div>
  )
}

export default Menuicons