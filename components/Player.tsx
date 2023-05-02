import ReactPlayer from 'react-player'
import { videoItem } from "@/pages/index";
import { useMediaQuery } from 'react-responsive'

interface PlayerProps {
  video: videoItem;
  fullWidth: boolean;
}

const Player: React.FC<PlayerProps> = ({ video, fullWidth }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

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
          url={video.src}
          playing={true}
          muted={true}
          controls={true}
          width={openFull() ? "100%" : "70%"}
          height={openFull() ? "100%" : "70%"}
        />
      </div>
    </div>
  )
}

export default Player;