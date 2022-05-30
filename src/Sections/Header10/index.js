const Header10=()=>{
    return(
        <>
        <div className="flex mt-10 relative">
            <div className="ml-10 text-3xl font-semibold">Markino</div>
            <div className="ml-[1100px] text-xs">About us</div>
        </div>
        <div className="relative ml-60">
            <div className="flex items-center ">
            <div className="relative flex flex-col justify-end  items-center py-6 ml-[300px] ">
            <div className="w-96 h-96 absolute top-2 rounded-full bg-[#141414]  space-y-4 z-20 "></div>
            <div className="text-2xl z-30 mt-20  text-white">Beacouse We<br/> Love</div>
            <div className="text-3xl z-30   text-[#79220f]">Branding</div>
            <div className="w-32  z-30 mt-8 "><img src="imgj.jpg"/></div>
            </div>
            <div className="relative flex flex-col justify-center items-center ml-[200px] z-30">
            <div className="w-80  absolute h-80   border-gray-100 rounded-full shadow-2xl -ml-40 mt-20"></div>
            <div className="absolute w-32 mt-10 z-50 -ml-52 right-0"><img src="imgs.jpg " className="z-50"/></div>
            <div className="border border-gray-400 text-xs py-1 text-center shadow-xl mt-[300px] w-24 -ml-24 ">option</div>
            </div>
            <div className="-rotate-90 mt-10 -ml-4 text-xs">New Updates</div>
            </div>

        </div>
        <div class="w-16 overflow-hidden inline-block">
            <div class=" h-11 w-11 bg-orange-700 rotate-45 transform origin-bottom-left"></div>
            </div>
        </>
    )
}
export default Header10