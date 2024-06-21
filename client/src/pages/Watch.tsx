import { useParams } from "react-router-dom"


export default function Watch() {
  const {videolink} = useParams()

  return (
    <div>
      <p>Will watch this video : {videolink}</p>
    </div>
  )
}
