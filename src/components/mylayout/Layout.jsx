'use client'
import React, { useState } from 'react'
import Footerlinks from './footer/Footerlinks'
import Footerend from './footer/Footerend'
import Menupopup from '../Popups/Menupopup'
import DraggableDiv from '../utility/DraggableDiv'

const Layout = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(false);

  const handleClick = () => {
    setActiveIndex(!activeIndex);
  };


  return (
    <div className="mycontainer">
      {activeIndex && ( <Menupopup/> )}

      
     
       <div className="mycontentbar">
       {children}
       </div>
<div className="myfooterbar">
    <div className="footempty">
      <img src="/icons/sun.png" alt="" className='weather' />
    </div>
    <div className="footmiddle">
        <Footerlinks handleClick={handleClick}/>
    </div>
    <div className="footend">
        <Footerend/>
    </div>
</div>
    </div>
  )
}

export default Layout