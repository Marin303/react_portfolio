import React from 'react'

const Weather = ({isActive}) => {
    if(!isActive){
        return null
    }
  return (
    <div>Weather</div>
  )
}

export default Weather