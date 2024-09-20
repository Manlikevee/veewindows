import React from "react";

// Your JSON data
const iconData = [
  { name: "Personal", path: "/icons/Personal.png" },
  { name: "Pictures", path: "/icons/Pictures (2).png" },
  { name: "Projects", path: "/icons/Projects.png" },
  { name: "School", path: "/icons/School.png" },
  { name: "Spotify", path: "/icons/Spotify.png" },
  { name: "Videos", path: "/icons/Videos.png" },
  { name: "Wallpapers", path: "/icons/Wallpapers.png" },
  { name: "Audio", path: "/icons/Audio.png" },
  { name: "Documents", path: "/icons/Documents.png" },
  { name: "Favorites", path: "/icons/Favorites.png" },
  { name: "Figma", path: "/icons/Figma.png" },
  { name: "Games", path: "/icons/Games.png" },
  { name: "Notes", path: "/icons/Notes.png" },
  { name: "Projects", path: "/icons/Projects.png" },
  { name: "School", path: "/icons/School.png" },
  { name: "Spotify", path: "/icons/Spotify.png" },
  { name: "Styles", path: "/icons/Styles.png" },
  { name: "Technical", path: "/icons/Technical.png" },
  { name: "Trash", path: "/icons/Trash.png" },

];

const IconGrid = () => {
  return (
    <div className="icon-grid">
      {iconData.map((icon, index) => (
        <div className="folderflex" key={index}>
          <div className="folderimg">
            <img src={icon.path} alt={icon.name} />
          </div>
          <div className="foldertext">
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
