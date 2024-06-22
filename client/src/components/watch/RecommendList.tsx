import { DummyThumbnailData } from "../../data/StaticData"
import ThumbnailSmall from "../ThumbnailSmall"

const RecommendList:React.FC=() => {

    return (
        <div className="w-[30vw] h-full flex flex-col">
            {DummyThumbnailData.map((data,index)=>(
                <ThumbnailSmall key={index} title={data.title} thumbnailPic={data.thumbnailPic} chanel={data.chanel} videoLink={data.videoLink} views={data.views}/>
            ))}
        </div>
    )
}

export default RecommendList