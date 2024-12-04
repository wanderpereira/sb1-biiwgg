import React from 'react';
import { VideoCarousel } from './components/VideoCarousel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Confira nossos últimos vídeos</h1>
        <VideoCarousel />
      </div>
    </div>
  );
}

export default App;