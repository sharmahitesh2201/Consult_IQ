
import React from 'react';
import { SAMPLE_VIDEOS } from '../constants';
import { VideoItem } from '../types';
import { PlayCircleIcon } from '../constants';

const VideoCard: React.FC<{ video: VideoItem }> = ({ video }) => {
  const thumbnailUrl = video.thumbnailUrl || `https://i.ytimg.com/vi/${video.youtubeVideoId}/hqdefault.jpg`;
  // Basic check for potentially invalid ID to avoid broken iframe src
  const isValidYoutubeId = video.youtubeVideoId && !video.youtubeVideoId.includes(' ');


  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group">
      <div className="relative aspect-video bg-slate-200">
        {isValidYoutubeId ? (
           <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeVideoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-slate-500 p-4 text-center">
            <PlayCircleIcon className="w-12 h-12 mb-2 opacity-50"/>
            <p className="text-sm">Video preview unavailable</p>
            <p className="text-xs mt-1">Content ID: {video.youtubeVideoId || 'Not specified'}</p>
          </div>
        )}
         {/* Fallback image if iframe fails or as a poster */}
         {!isValidYoutubeId && video.thumbnailUrl && (
            <img src={video.thumbnailUrl} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10"/>
         )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-xs text-red-500 font-medium mb-2 uppercase tracking-wide">{video.uploader}</p>
        <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
          {video.description}
        </p>
        {/* <a 
            href={`https://www.youtube.com/watch?v=${video.youtubeVideoId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto pt-3 text-sm font-semibold text-red-600 group-hover:text-red-700 group-hover:underline transition-colors self-start"
        >
            Watch on YouTube &rarr;
        </a> */}
      </div>
    </div>
  );
};


const StrategyVideosPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Strategy Videos</h2>
        <p className="text-lg text-gray-600">
          Learn from experts and enhance your consulting skills with these curated videos.
        </p>
      </div>

      {SAMPLE_VIDEOS.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <img src="https://illustrations.popsy.co/slate/video-files.svg" alt="No videos" className="mx-auto mb-6 h-32 w-32" />
          <p className="text-xl text-gray-700 font-semibold">No Videos Available Yet</p>
          <p className="text-gray-500">Our curators are working hard to bring you the best content. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default StrategyVideosPage;
