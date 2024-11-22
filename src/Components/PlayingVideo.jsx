import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidApi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";

const PlayingVideo = () => {
  const [video, setVideo] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchvideoDetail();
  }, [id]);
  const fetchvideoDetail = () => {
    fetchData(`video/details/?id=${id}`)
      .then((res) => {
        console.log("Res : ", res);
        setVideo(res);
      })
      .catch((err) => {
        console.log("Error in playing video : ", err);
      });
  };
  return (
    <div className="mt-16 flex justify-center flex-row h-[calc(100%-60px)]">
      <div className="w-full max-w-[1580px] flex  flex-col mt-20 lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-360px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[400px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="flex border space-x-4 space-y-2 mt-2">
            <img
              src={video?.author?.avatar}
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
      </div>
    </div>
  );
};

export default PlayingVideo;
