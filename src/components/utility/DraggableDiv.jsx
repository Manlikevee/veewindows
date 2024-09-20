import React, { Children, useState } from "react";
import Draggable from "react-draggable"; // Import the Draggable package
import Inputcomponent from "./Inputcomponent";
import IconGrid from "./Icongrid/IconGrid";

const myicons = [
    {
        "name": "Home",
        "path": "/icons/home.png",
        'step': 1
      },
    {
      "name": "Music",
      "path": "/icons/music.png",
      'step': 1
    },
    {
      "name": "Pictures",
      "path": "/icons/pictures.png"
      ,'step': 1
    },
    {
      "name": "This PC",
      "path": "/icons/Thispc.png"
      ,'step': 2
    },
    {
      "name": "Victor's PC",
      "path": "/icons/victor_pc.png"
      ,'step': 2
    },
    {
      "name": "Works",
      "path": "/icons/works.png"
      ,'step': 3
    },
    {
      "name": "Desktop",
      "path": "/icons/desktop.png"
      ,'step': 3
    },
    {
      "name": "Documents",
      "path": "/icons/document.png"
      ,'step': 3
    },
    {
      "name": "Downloads",
      "path": "/icons/downloads.png"
        ,'step': 3
    }
  ]
  
  const DraggableDiv = ({ handleExplorer, onDelete, ref }) => {
    const [country, setCountry] = useState('');
    const [fullscreen, setfullscreen] = useState(false);
    const step1Icons = myicons.filter(icon => icon.step === 1);
    const step2Icons = myicons.filter(icon => icon.step === 3);
    const step3Icons = myicons.filter(icon => icon.step === 2);

    function togglefullscreen(){
        setfullscreen(!fullscreen)
    }
  return (
    <Draggable handle=".headertopempty" > 
  <div className={`wrapper ${fullscreen ? 'fullscreen' : ''}`} ref={ref} id={ref}>
        
        <header className="header">
            <div className="headertop">
                <div className="headertopempty">

                </div>
            <div className="arrowcontrol">
   <span className="material-symbols-outlined">
   remove
</span>
<span className="material-symbols-outlined" onClick={togglefullscreen}>
check_box_outline_blank
</span>

<span className="material-symbols-outlined" onClick={() => onDelete()}>
                close
              </span>



   </div>
            </div>
            <div className="headerbtm">
            <div className="arrowcontrol">
   <span className="material-symbols-outlined">
arrow_back
</span>
<span className="material-symbols-outlined">
arrow_right_alt
</span>

<span className="material-symbols-outlined">
arrow_upward
</span>
<span className="material-symbols-outlined">
refresh
</span>


   </div>
   <div className="mypath">
  <div className="pathpway">

        <div className="pathpill">
        <Inputcomponent 
  inputState={country} 
  setInputState={setCountry} 
  inputType="text" 
  name="board_experience" 
  id="board_experience" 
  placeholder={'Home'}
  icontype={'cottage'}
  readonly
/>
  
    </div>
  </div>
   </div>
   <div className="mypath smallerpath">
   <Inputcomponent 
  inputState={country} 
  setInputState={setCountry} 
  inputType="text" 
  name="board_experience" 
  id="board_experience" 
  placeholder={'Type here to search'}
  icontype={'search'}
/>
   </div>

   <div className="arrowcontrol">
   <span className="material-symbols-outlined">
   view_headline
</span>

<span className="material-symbols-outlined">
grid_view
</span>
   </div>
            </div>

        </header>
<div className="myfolder">
    <div className="foldersidebar">
    {step1Icons.map((icon, index) => (
        <div className="folderflex" key={index}>
          <div className="folderimg">
            <img src={icon.path} alt={icon.name} />
          </div>
          <div className="foldertext">
            {icon.name}
          </div>
        </div>
      ))}
      <div className="divider"></div>

      {step2Icons.map((icon, index) => (
        <div className="folderflex" key={index}>
          <div className="folderimg">
            <img src={icon.path} alt={icon.name} />
          </div>
          <div className="foldertext">
            {icon.name}
          </div>
          <img src='/icons/shape.png' alt={icon.name}  className="shape"/>
        </div>
      ))}
      <div className="divider"></div>

      {step3Icons.map((icon, index) => (
        <div className="folderflex" key={index}>
          <div className="folderimg">
            <img src={icon.path} alt={icon.name} />
          </div>
          <div className="foldertext">
            {icon.name}
          </div>
   
        </div>
      ))}
<br />
<br />
    </div>
    <div className="folderbody">
<div className="flexstyle gridstyle">

    <div className="ffolder">
        Frquent Folders
    </div>
<IconGrid/>

</div>
<br />
<br />
<br />

    </div>
</div>
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
