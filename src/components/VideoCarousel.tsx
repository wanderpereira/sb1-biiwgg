import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { YouTubeVideo } from '../types/youtube';
import { fetchYouTubeVideos } from '../utils/youtube';
import { VideoCard } from './VideoCard';

const CHANNEL_ID = 'UC-4o5laGvz-pDS1-l2yKh6w';

export function VideoCarousel() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchYouTubeVideos(CHANNEL_ID);
      setVideos(fetchedVideos);
      setLoading(false);
    };
    loadVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[300px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: '.carousel-arrow-prev',
          nextEl: '.carousel-arrow-next',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        className="!px-4 !py-8"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.guid}>
            <VideoCard video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button 
        className="carousel-arrow carousel-arrow-prev group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <button 
        className="carousel-arrow carousel-arrow-next group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}