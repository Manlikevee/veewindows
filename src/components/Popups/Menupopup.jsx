import React, { useState } from 'react'
import Inputcomponent from '../utility/Inputcomponent';

const Menupopup = () => {
    const icons = [
        {
          name: "Microsoft Edge",
          path: "/icons/Microsoft_Edge_logo_(2019).png"
        },
        {
          name: "OneDrive",
          path: "/icons/onedrive-1.png"
        },
        {
          name: "Microsoft To Do",
          path: "/icons/To_Do.png"
        },
        {
          name: "Spotify",
          path: "/icons/1200px-Antu_spotify.png"
        },
        {
          name: "Settings",
          path: "/icons/icons8-settings.png"
        },
        {
            name: "Note",
            path: "/icons/note.png"
          },
          {
            name: "Store",
            path: "/icons/Store.png"
          },
          {
            name: "Gallery",
            path: "/icons/Gallery.png"
          }
      ];
      const allicons = [
        {
          name: "File Explorer",
          path: "/icons/File_Explorer.png",
        },
        {
          name: "Music Folder",
          path: "/icons/Music folder.png",
        },
        {
          name: "Microsoft Edge",
          path: "/icons/Microsoft_Edge_logo_(2019).png"
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
    

    const [country, setCountry] = useState('');
  return (<>
      <div className="menupopoverlay">
      
      </div>
      <div className='menupopup'>
     <Inputcomponent 
    inputState={country} 
    setInputState={setCountry} 
    inputType="text" 
    name="board_experience" 
    id="board_experience" 
    placeholder={'Type here to search'}
    icontype={'search'}
  />
  
  <div className="pinnedflex">
      <div className="pinnedtext">
      Pinned
      </div>
      <div className="allapps">
  All apps
      </div>
  </div>
  
  <div className="pinnedgrid">
  {icons.map((icon, index) => (
          <div key={index} className="icon-item">
            <img src={icon.path} alt={icon.name} />
            <span>{icon.name}</span>
          </div>
        ))}
  </div>
  
  
  <div className="pinnedflex">
      <div className="pinnedtext">
      Recommended
      </div>
      <div className="allapps">
  All apps
      </div>
  </div>

  <div className="pinnedgrid">
  {allicons.map((icon, index) => (
          <div key={index} className="icon-item">
            <img src={icon.path} alt={icon.name} />
            <span>{icon.name}</span>
          </div>
        ))}
  </div>
      </div>
  </>

  )
}

export default Menupopup