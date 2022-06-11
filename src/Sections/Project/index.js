import Button from "../../components/Button"

const Project=()=>{
    return(
        <>
        <div className="text-center mt-20">
            <div className="text-lg text-[#75DAB4]">Case Study</div>
            <div className="text-5xl mt-2 font-semibold">Project</div>
            <div className="text-lg mt-8">Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a<br/> orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</div>
            <div className="flex justify-between mx-60  mt-10">
                <div className=" "><Button className="bg-gray-900 hover:text-Black hover:bg-[#75DAB4] text-sm">All</Button></div>
                <div><Button className="bg-gray-900 hover:text-Black hover:bg-[#75DAB4] text-sm">UL/UX</Button></div>
                <div><Button className="bg-gray-900 hover:text-Black hover:bg-[#75DAB4] text-sm">Web Design</Button></div>
                <div><Button className="bg-gray-900 hover:text-Black hover:bg-[#75DAB4] text-sm">Developing</Button></div>
                <div><Button className="bg-gray-900 hover:text-Black hover:bg-[#75DAB4] text-sm">Graphic Design</Button></div>
            </div>
            <div className="flex justify-between ">
                <div className="w-[500px] my-10 mx-10"><img src="imgh.jpg" className="rounded-md"/></div>
                <div className="w-[500px] my-10 mx-10"><img src="imgz.jpg" className="rounded-md"/></div>
                <div className="w-[500px] my-10 mx-10"><img src="imgg.jpg" className="rounded-md"/></div>
            </div>
            <div className="flex justify-between ">
                <div className="w-[500px] my-10 mx-10"><img src="imgi.jpg" className="rounded-md"/></div>
                <div className="w-[500px] my-10 mx-10"><img src="imgj.jpg" className="rounded-md"/></div>
                <div className="w-[500px] my-10 mx-10"><img src="imgw.jpg" className="rounded-md"/></div>
            </div>
        </div>
        </>
    )
}
export default Project