import DateTimeComponent from '@/components/utility/DateTimeComponent'
import React from 'react'

const Footerend = () => {
  return (
    <div className='footerend'>
        <div className="more">
        <span className="material-symbols-outlined">
keyboard_arrow_up
</span>
        </div>
        {/* <span className="material-symbols-outlined">
cloud_off
</span> */}
<span className="material-symbols-outlined">
battery_charging_90
</span>
        <span className="material-symbols-outlined">
wifi
</span>

        <span className="material-symbols-outlined">
volume_up
</span>
<DateTimeComponent/>
 <span className="material-symbols-outlined">
comment
</span>
    </div>
  )
}

export default Footerend