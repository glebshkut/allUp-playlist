import type { NextPage } from 'next'
import Player from "@/components/Player"
import Navigation from "@/components/Navigation"
import { useEffect, useState } from "react"

export interface videoItem {
  title: string;
  src: string;
  author: string;
  width: number;
  height: number;
}

const Home: NextPage = () => {
  const [video, setVideo] = useState<videoItem>();
  const [videos, setVideos] = useState<videoItem[]>([]);
  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/videos.json');
      const jsonData = await response.json();
      setVideos(jsonData);
      setVideo(jsonData[0]);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-orange-500 h-screen w-screen overflow-hidden flex lg:flex-row lg:gap-0 flex-col gap-3">
      <div className="flex-shrink-0">
        <Navigation currentVideo={video} setVideo={setVideo} videos={videos} />
      </div>
      <div className="flex-grow relative">
        {video && (
          <div className="absolute inset-0">
            <Player fullWidth={fullWidth} video={video} />
          </div>
        )}
      </div>
      <button
        onClick={() => setFullWidth(prev => !prev)}
        className="absolute left-0 right-0 mx-auto bottom-5 p-5 flex justify-center w-1/3 text-white bg-black rounded-full md:hidden"
      >
        {fullWidth ? 'Centered' : 'Full width'}</button>
    </div>
  )
}

export default Home
