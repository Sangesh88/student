import Button from "../../components/Button"

const AllBlog=()=>{
    return(
        <>
        <div className="text-center mt-20">
            <div className="text-xl text-[#75DAB4] ">All Blog</div>
            <div className="text-4xl font-bold mt-2">Latest Post</div>
            <div className="text-lx mt-4">Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a<br/> orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</div>
            <div className="flex justify-between">
            <div className="w-80 bg-white border-2 shadow-md relative mx-10 mb-10 mt-20">
                <div className="w-80 "><img src="imgw.jpg" className="skew-x-6  object-contain rounded-md hover:scale-125 hover:-skew-x-0"></img></div>
                <div className=" ">
                    <div className="flex justify-between mx-4 mt-6">
                        <div className="">By Admin</div>
                        <div className="">22.02.2022</div>
                    </div>
                    <div className="text-left mt-4 text-2xl font-bold pb-6 hover:text-[#75DAB4]">Quisque Malesuada Sapien <br/>And Donec Sed Nunc</div>
                    <div className="absolute top-0"><Button className="w-20 bg-[#75DAB4] hover:bg-red-100 hover:text-[#75DAB4] ">UL/UX</Button></div>
                </div>
            </div>
            <div className="w-80 bg-white border-2 shadow-md relative mx-10 mb-10 mt-20">
                <div className="w-80"><img src="imgw.jpg" className="skew-x-6 rounded-md hover:skew-x-0"></img></div>
                <div className=" ">
                    <div className="flex justify-between mx-4 mt-6">
                        <div className="">By Admin</div>
                        <div className="">22.02.2022</div>
                    </div>
                    <div className="text-left mt-4 text-2xl font-bold pb-6 hover:text-[#75DAB4]">Quisque Malesuada Sapien <br/>And Donec Sed Nunc</div>
                    <div className="absolute top-0"><Button className="w-20 bg-[#75DAB4] hover:bg-red-100 hover:text-[#75DAB4] ">UL/UX</Button></div>
                </div>
            </div>
            <div className="w-80 bg-white border-2 shadow-md relative mx-10 mb-10 mt-20">
                <div className="w-80"><img src="imgw.jpg" className="skew-x-6 rounded-md hover:skew-x-0"></img></div>
                <div className=" ">
                    <div className="flex justify-between mx-4 mt-6">
                        <div className="">By Admin</div>
                        <div className="">22.02.2022</div>
                    </div>
                    <div className="text-left mt-4 text-2xl font-bold pb-6 hover:text-[#75DAB4]">Quisque Malesuada Sapien <br/>And Donec Sed Nunc</div>
                    <div className="absolute top-0"><Button className="w-20 bg-[#75DAB4] hover:bg-red-100 hover:text-[#75DAB4] ">UL/UX</Button></div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default AllBlog