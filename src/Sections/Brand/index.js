import Button from "../../components/Button"

const Brand=()=>{
    return(
        <>
        <div className="bg-gray-100 w-full mt-8 py-4 mx-4">
            <div className="text-center mt-4">
                <div className="pt-10 text-xs">Valuable Elements</div>
                <div className="text-2xl mt-4 text-[#e35f15]">Brands We Worked For</div>
            </div>
            <div className="flex justify-between" >
            <div className="relative">
            <div className="w-[400px]  my-10 "><img src="imgj.jpg"/></div>
            <div className="bg-black w-[400px] absolute  hover:pb-10 bottom-0 hover:ease-in-out hover:delay-150 hover:duration-500 ">
                <div className="text-white ml-20  my-4 text-lg ">The New Brand</div>
                <div className="">
                <div className=""><i class="fa-solid fa-arrow-down-long mb-4 text-white ml-[280px] rotate-90 animate-bounce"/></div>
                <div className="ml-52 mb-4"><Button className="bg-orange-500 text-white">option</Button></div>
                </div>
            </div>
            
            </div>
            <div className="relative">
            <div className="w-[400px] my-10"><img src="imgj.jpg"/></div>
            <div className="bg-black w-[400px] absolute  hover:pb-10 bottom-0 hover:ease-in-out hover:delay-150 hover:duration-500 ">
                <div className="text-white ml-20 my-4 text-lg ">The New Brand</div>
                <div className="">
                <div className=""><i class="fa-solid fa-arrow-down-long mb-4 text-white ml-[280px] rotate-90 animate-bounce"/></div>
                <div className="ml-52 mb-4"><Button className="bg-orange-500 text-white">option</Button></div>
                </div>
            </div>
            
            </div>
            <div className="relative">
            <div className="w-[400px] my-10 "><img src="imgj.jpg"/></div>
            <div className="bg-black w-[400px] absolute hover:pb-10 bottom-0 hover:ease-in-out hover:delay-150 hover:duration-500 ">
                <div className="text-white ml-20 my-4 text-lg ">The New Brand</div>
                <div className="">
                <div className=""><i class="fa-solid fa-arrow-down-long mb-4 text-white ml-[280px] rotate-90 animate-bounce"/></div>
                <div className="ml-52 mb-4"><Button className="bg-orange-500 text-white">option</Button></div>
                </div>
            </div>
            
            </div>
            </div>
        </div>
        </>
    )
}
export default Brand