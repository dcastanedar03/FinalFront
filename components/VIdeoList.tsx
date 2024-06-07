import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { Video } from "../types.ts";
type Props = {videos: Video[]; userid:string;};
const VideoList: FunctionComponent<Props>=({videos, userid})=>{
    return <div>
        {videos.map((video)=>(<div key = {video.id}> <a href= {`/video/${video.id}`}><img src ={video.thumbnail}alt={video.title}/>
        <h3>{video.title}</h3>
        <p>Release date: {new Date(video.date).toLocaleDateString()}</p> </a>
        </div>
        ))}
    </div>
};
export default VideoList;