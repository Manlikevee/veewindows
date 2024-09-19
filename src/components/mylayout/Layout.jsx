import React from 'react'
import Footerlinks from './footer/Footerlinks'
import Footerend from './footer/Footerend'

const Layout = ({children}) => {




  return (
    <div className="mycontainer">
       <div className="mycontentbar">
       {children}
       </div>
<div className="myfooterbar">
    <div className="footempty"></div>
    <div className="footmiddle">
        <Footerlinks/>
    </div>
    <div className="footend">
        <Footerend/>
    </div>
</div>
    </div>
  )
}

export default Layout