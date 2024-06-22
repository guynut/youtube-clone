import { useParams } from "react-router-dom"
import VideoContainer from "../components/watch/VideoContainer"
import RecommendList from "../components/watch/RecommendList"

const Watch:React.FC=() => {
  const {videolink} = useParams()
  // Search videolink match to get data => DummyThumbnailData + Description

  return (
    <>
      {videolink ? (
        <div className="h-[93vh] w-full flex">
          <VideoContainer link={videolink}/>
          <RecommendList/>
        </div>):(
          <div className="h-[93vh] w-full flex justify-center items-center">
            <h1 className="text-2xl">Link broken or Can not found {videolink}</h1>
          </div>
        )
      }
    </>
  )
}

export default Watch
