import React from 'react'
import WarningIcon from 'Icons/warning.svg'

const MessageForMobileDevices = () => {
  return (
    <div className="centered-inline">
      <img src={WarningIcon} className="icon" />&nbsp;
      This website is not optimized for mobile devices.
    </div>
  )
}

export default MessageForMobileDevices
