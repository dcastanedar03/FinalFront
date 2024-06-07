import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Logout from "../islands/Logout.tsx";

type Props = {userName:string;};
const Header:FunctionComponent<Props> = ({userName})=>{return (<header><div><span>{userName}</span><Logout/></div></header>);}
export default Header;