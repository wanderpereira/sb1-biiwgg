import React from 'react';
import { Play } from 'lucide-react';
import type { YouTubeVideo } from '../types/youtube';

interface VideoCardProps {
  video: YouTubeVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group relative h-[300px] w-full overflow-hidden rounded-xl">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="mb-2 text-lg font-bold line-clamp-2">{video.title}</h3>
          <p className="mb-2 text-sm text-gray-300">
            {new Date(video.pubDate).toLocaleDateString()}
          </p>
          <p className="text-sm line-clamp-2 text-gray-400">{video.description}</p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-transform hover:scale-105"
        >
          <Play size={20} />
          Assistir agora
        </a>
      </div>
    </div>
  );
}