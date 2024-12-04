export interface YouTubeVideo {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  description: string;
  guid: string;
}

export interface RSS2JSONResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    description: string;
    image: string;
  };
  items: YouTubeVideo[];
}