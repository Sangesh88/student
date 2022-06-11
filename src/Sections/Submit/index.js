import Button from "../../components/Button"
import Calculate from "../../components/Calculate"

const Submit=()=>{
    return(
        <>
        <div className="bg-[#18191B] w-full  py-20 mt-20 mb-4 ">
            <div className="px-20 flex justify-between ">
            <div className="text-white   ">
                <div className="text-[#75DAB4] text-xl"> Get In Touch</div>
                <div className="text-4xl mt-2">SUBSCRIBE OUR</div>
                <div className="text-3xl mt-6">NEWSLETTER</div>
            </div>
            <div className="bg-black  text-white rounded-2xl">
                <div className="flex pl-10 pr-10 mt-12 space-x-44  ">
                <div className="text-gray-500 text-xl">Type ypur Email</div>
                <div><Button className="bg-[#75DAB4] ">Submit</Button></div>
                </div>
            </div>
            </div>
        </div>
        
        </>
    )
}
export default Submit