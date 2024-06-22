import { useParams } from "react-router-dom"
import VideoContainer from "../components/watch/VideoContainer"
import RecommendList from "../components/watch/RecommendList"

const Watch:React.FC=() => {
  const {videolink} = useParams()
  // Search videolink match to get data => DummyThumbnailData + Description

  return (
    <>
      {videolink &&
        <div className="h-[93vh] w-full flex mt-[7vh]">
          <VideoContainer link={videolink}/>
          <RecommendList/>
        </div>}
    </>
  )
}

export default Watch
