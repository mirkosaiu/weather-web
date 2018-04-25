import React from "react"


const PollutionLevel = (gas) => {
  var gasLevel = <span className="lime-green-text">Low</span>
  if (gas > 500000 ) gasLevel = <span className="orange-text">Average</span>
  if (gas > 1000000 ) gasLevel = <span className="dark-orange-text">High</span>
  if (gas > 1500000 ) gasLevel = <span className="red-text">Very high</span>
  if (gas > 2000000 ) gasLevel = <span className="purple-text">Very dangerous</span>

  return gasLevel
}

export default PollutionLevel
