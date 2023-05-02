import ReactPlayer from 'react-player'
import { videoItem } from "@/pages/index";
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface PlayerProps {
  video: videoItem;
  fullWidth: boolean;
}

const Player: React.FC<PlayerProps> = ({ video, fullWidth }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [video])

  const openFull = () => {
    if (isMobile) {
      if (fullWidth) {
        return true;
      } else {
        false;
      }
    } else {
      return false;
    }
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className={`${openFull() ? 'h-full w-full' : 'relative flex justify-center'}`}>
        <ReactPlayer
          onPlay={() => setLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
          url={video.src}
          playing={true}
          muted={true}
          controls={true}
          width={openFull() ? "100%" : "70%"}
          height={openFull() ? "100%" : "70%"}
        />
        {isLoading && <div>
          <ClipLoader size={50} color="#86EFAC" />
        </div>}
      </div>
    </div>
  )
}

export default Player;