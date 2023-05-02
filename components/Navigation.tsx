import { videoItem } from "pages";


interface NavProps {
  currentVideo: videoItem | undefined;
  setVideo: (a: videoItem) => void;
  videos: videoItem[];
}

const Navigation: React.FC<NavProps> = ({ currentVideo, setVideo, videos }) => {
  const handleClick = (video: videoItem) => {
    setVideo(video)
  }

  return (
    <div className="mt-3 w-full justify-around flex lg:flex-col text-sm sm:text-lg gap-3 lg:pl-5">
      <span className="hidden lg:flex justify-center">Playlist</span>
      {videos.map((video: videoItem, key) =>
        <div
          key={key}
          className={`py-4 px-2 border-2 rounded-xl hover:cursor-pointer ${currentVideo === video ? 'bg-green-300' : 'hover:bg-slate-100'}`}
          onClick={() => handleClick(video)}
        >{video.title}</div>
      )
      }
    </div >
  )
}

export default Navigation;