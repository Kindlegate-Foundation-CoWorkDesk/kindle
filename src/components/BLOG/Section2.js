import React, { useState, useEffect } from 'react';
async function fetchVid() {
  const API_KEY = 'AIzaSyCWl0TmV6i5M_-Wqtb9lzfJJUYZ0E5NCgY';
  const CHANNEL_ID = 'UCpxce_yOitm3X0uozlfbzng';

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video`
  );

  const data = await response.json();
  return data.items; // This array contains video information
}
export default function Section2() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const videoItems = await fetchVid();
      setVideos(videoItems);
    }

    loadVideos();
  }, []);

  return (
    <div>
      <h2>YouTube Videos</h2>
      <div className="video-container">
        {videos.map(video => (
          <div key={video.id.videoId} className="video-item grid grid-cols-2 gap-4">
            <div className='p-4'>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <p>{video.snippet.title}</p>
              </a>
            </div>
            
            <div className='p-4'>
              <p>{video.snippet.description}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}