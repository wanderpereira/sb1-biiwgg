import type { RSS2JSONResponse, YouTubeVideo } from '../types/youtube';

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json';

export async function fetchYouTubeVideos(channelId: string): Promise<YouTubeVideo[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const response = await fetch(`${RSS2JSON_API}?rss_url=${encodeURIComponent(rssUrl)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }

    const data: RSS2JSONResponse = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Invalid RSS feed');
    }

    return data.items.map(video => ({
      ...video,
      thumbnail: video.thumbnail || `https://i.ytimg.com/vi/${video.guid}/maxresdefault.jpg`,
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}