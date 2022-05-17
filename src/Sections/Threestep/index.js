import Button from "../../components/Button"

const Threestep=()=>{
    return(
        <>
        <div className="flex bg-[#faf9fe] justify-center w-full">
        <div className="  flex -mt-32 z-20 absolute   justify-between w-3/4 items-center align-middle text-center   bg-white border rounded-md shadow-md py-12 px-12">
                <div className="">
                <select className="px-8 py-2  w-1/ rounded-md  appearance-none focus:outline-green-600">
                    <option>Select option</option>
                    <option>a</option>
                    <option>b</option>
                </select>
                </div>
                <div className="">
                <select className="px-8 py-2  rounded-md  appearance-none focus:outline-green-600">
                    <option>Select option</option>
                    <option>a</option>
                    <option>b</option>
                </select>
                </div>
                <div className="">
                <select className="px-8 py-2  rounded-md  appearance-none focus:outline-green-600">
                    <option>Select option</option>
                    <option>a</option>
                    <option>b</option>
                </select>
                </div>
                <div className="">
                <Button>Read More</Button>
                </div>
            </div>
            </div>
        </>
    )
}
export default Threestep
