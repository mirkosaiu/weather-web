import React from 'react'
import WarningIcon from 'Images/warning.svg'

const MessageForMobileDevices = () => {
  const warningIcon = new Image();
  warningIcon.src = WarningIcon;
  
  return (
    <div className="centered-inline">
      <img src={warningIcon.src} className="warning-icon" />&nbsp;
      This website is not optimized for mobile devices.
    </div>
  )
}

export default MessageForMobileDevices
