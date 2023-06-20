
import { Outlet } from "react-router-dom";
import Header from "./Header";

let Main = ()=>{
    return <>
    <Header></Header>
    <Outlet></Outlet>
    </>
}
export default Main;