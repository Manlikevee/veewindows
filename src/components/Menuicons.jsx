import React from 'react';

const Menuicons = ({ handleExplorer }) => {
  const allicons = [
    {
      name: "File Explorer",
      path: "/icons/File_Explorer.png",
      onpress: handleExplorer, // Only File Explorer has this action
    },
    {
      name: "Gallery",
      path: "/icons/gallery.png",
    },
    {
      name: "Music Folder",
      path: "/icons/Music folder.png",
    },
    {
      name: "Note",
      path: "/icons/note.png",
    },
    {
      name: "Paint",
      path: "/icons/paint.png",
    },
    {
      name: "Recycle Bin",
      path: "/icons/recyclebin.png",
    },
    {
      name: "Store",
      path: "/icons/store.png",
    },
    {
      name: "Video",
      path: "/icons/video.png",
    },
    {
      name: "Camera",
      path: "/icons/camera.png",
    },
    {
      name: "Download",
      path: "/icons/download.png",
    },
  ];

  return (
    <div className="grid-container">
      {allicons.map((icon, index) => (
        <div
          key={index}
          className="icon-item"
          onDoubleClick={icon.onpress ? icon.onpress : null} // Handle click only if onpress exists
        >
          <img src={icon.path} alt={icon.name} />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Menuicons;
