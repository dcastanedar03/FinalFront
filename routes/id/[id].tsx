import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Video } from "../../types.ts";
import VideoList from "../../components/VIdeoList.tsx";

type State = {id: string; name: string; email: string;};
type Data = {video: Video; userid: string; };
export const handler: Handlers<Data, State> = {
    GET: async(req: Request, ctx: FreshContext<State, Data>)=> {
        const userid = ctx.state.id;
        const videoid = ctx.params.id;
        const API_URL = Deno.env.get("API_URL");
        if(!API_URL){
            throw new Error("API_URL is not set in yhe enviroment");
        }
        const response = await fetch (`${API_URL}/video/${userid}/${videoid}`);
        if (response.status !== 200){
            return new Response(null,{status: 303, headers:{location:"/videos"}}); 
        }
        const video : Video= await response.json();
        return ctx.render({video,userid});
    },

};
const Page = (props: PageProps<Data>)=>(
    <div class="video-page-container">
        <h1 className = "video-list-title">Curso Deno Fresh</h1>
        
    </div>
);export default Page;
