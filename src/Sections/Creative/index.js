import Button from "../../components/Button"
import Button1 from "../../components/Button1"

const Creative=()=>{
    return(
        <>
        <div className="bg-[#18191B] mt-0 ">
            <div className="pt-10 pl-10 text-white w-[700px] ">
                <div className="text-5xl font-bold ">CREATIVE & MINIMAL</div>
                <div className="mt-4 text-4xl">IT AGENCY.</div>
                <div className="text-justify text-sm mt-10 ">Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. ol Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec dui luctus, pellentesque lacus sed, mollis leo.</div>
                <div className="flex my-10">
                <div className=""><Button className="bg-gray-500">About us</Button></div>
                <div className=" mb-24 border bg-gray-800 rounded ml-10 w-40 "><Button1 className="text-white ">See Project</Button1></div>
                </div>
                <div className="w-[500px] ml-[800px] -mt-[450px] mb-10  rounded-tl-3xl"><img src="img22.jpg" className="rounded-tl-full"/></div>

            </div>
           
        </div>
        </>
    )
}
export default Creative