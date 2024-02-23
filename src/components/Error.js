import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    const {status, statusText,data}=err
    console.log(err)
   return (
    <>
    <h1>Oops Somthing went wrong</h1>
    <h2>{status+" : "+statusText}</h2>
    <h3>{data}</h3>
    </>

    )
};

export default Error;