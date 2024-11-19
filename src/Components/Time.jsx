import React from 'react'
import moment from "moment"
const Time = ({time}) => {
    const videoTime = moment()?.startOf("day")?.second(time)?.format("H:mm:ss")
  return (
    <div>
      <span className='absolute py-1 px-2 right-2 bottom-2 bg-gray-950 text-white text-xs rounded-md'>{videoTime}</span>
    </div>
  )
}

export default Time
