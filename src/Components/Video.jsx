// import React from 'react'
// import { Link } from 'react-router-dom'
// import Time from './Time'
// import Avatar from "react-avatar"
// import {abbreviateNumber} from "js-abbreviation-number"

// const Video = ({video}) => {

//   return (
//     <div className=''>
//        <Link to={`/video/${video?.videoId}`}>
//             <div className="w-full sm:w-60 md:w-72 border border-gray-400 p-2">
//                 <div className="relative h-48 md:h-56 rounded-lg hover:rounded-none duration-150 overflow-hidden">
//                     <img src={video?.thumbnails[0]?.url} alt="thumbnail" className='h-full w-full mb-2'/>
//                     {video?.lengthSeconds && <Time time={video?.lengthSeconds}/>}
//                 </div>
//                 <div className="flex border space-x-4 space-y-2 mt-2">
//                 <img src={video?.author?.avatar[0]?.url} 
//      className="h-[50px] w-[50px] rounded-full overflow-hidden object-cover" 
//      alt="Author Avatar" />
//                     <div className='px-1'>
//                         <h2 className='font-semibold text-xl line-clamp-2'>{video?.title}</h2>
//                         <span className='text-lg text-gray-400'>{video?.author?.title}</span>
//                         <div className="flex space-x-4">
//                           <span className='text-gray-600 text-xs'>{abbreviateNumber(video?.stats?.views,1)} views </span>
//                           <span className='text-gray-600 text-xs'>{video?.publishedTimeText}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//        </Link>
//     </div>
//   )
// }

// export default Video
import React from 'react';
import { Link } from 'react-router-dom';
import Time from './Time';
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({ video }) => {
  return (
    <div className='mt-6'>
      <Link to={`/video/${video?.videoId}`}>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md border border-gray-400 p-2 mt-5">
          <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 rounded-lg hover:rounded-none duration-150 overflow-hidden">
            <img
              src={video?.thumbnails[0]?.url}
              alt="thumbnail"
              className='h-full w-full object-cover'
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex border space-x-4 space-y-2 mt-2">
            <img
              src={video?.author?.avatar[0]?.url}
              className="h-12 w-12 rounded-full overflow-hidden object-cover"
              alt="Author Avatar"
            />
            <div className='px-1'>
              <h2 className='font-semibold text-sm sm:text-base md:text-lg line-clamp-2'>{video?.title}</h2>
              <span className='text-xs sm:text-sm text-gray-400'>{video?.author?.title}</span>
              <div className="flex space-x-4">
                <span className='text-gray-600 text-xs'>{abbreviateNumber(video?.stats?.views, 1)} views </span>
                <span className='text-gray-600 text-xs'>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
