import Button from "../../components/Button"

const Navarea=()=>{
    return(
        <>
        <div className="flex font-semibold justify-end items-center ">
            
        <div className="">
            <Button type="secondary" className=" mr-0 pr-0 text-xs font-semibold  tracking-widest    rounded-none border-[#4dba29] text-[#4dba29]   items-center flex  my-1">Login</Button>
            </div>   
            
            <div className="">
            <Button className="text-xs font-semibold tracking-widest w-[80px] h-8  px-1 py-2 mx-1 "> Signup</Button>
            </div>
        </div>
        </>
    )
}
export default Navarea