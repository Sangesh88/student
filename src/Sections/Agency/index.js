import Button from "../../components/Button"

const Agency=()=>{
    return(
        <>
        <div className="bg-gray-100 shadow-md w-full mt-20 ">
            <div className="flex ">
            <div className="ml-20 mt-10">
                <div className="text-xs">About us</div>
                <div className="text-2xl mt-6"> Future <br/>oriented</div>
                <div className="text-2xl text-[#e35f15]">Agency</div>
            </div>
            <div className="ml-32 mr-20 mt-10">
                <div className="text-xs ">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</div>
                <div className="text-sm mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ornare eleifend. Morbi iaculis sodales lacinia. Pellentesque in ornare ex. Suspendisse vel lacus sodales, feugiat est ac, ultrices orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                <div className="flex">
                <div className="w-10 h-10 bg-[#e35f15] rounded-full mt-2"></div>
                <div className="ml-4 mt-4 text-sm">Jack jone</div>
                </div>
            </div>        
            </div>
            <div className="flex mt-10">
            <div className="w-[2000px] mb-4 ml-20"><img src="imgj.jpg"/></div>
             <div>
                 <div className="w-[300px] ml-12"><img src="img2.jpg"/></div>
                 <div className="flex mt-2">
                 <div className="ml-12">Vission</div>
                 <div className="ml-72">Mission</div>
                 </div>
                 <div className="flex mt-2 text-justify">
                     <div className="ml-10 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ornare eleifend. Morbi iaculis sodales lacinia. Pellentesque in ornare ex. Suspendisse vel lacus sodales, feugiat est ac, ultrices orci. Interdum et malesuada fames ac ante ipsum primis in faucibus</div>
                     <div className="text-xs mx-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ornare eleifend. Morbi iaculis sodales lacinia. Pellentesque in ornare ex. Suspendisse vel lacus sodales, feugiat est ac, ultrices orci. Interdum et malesuada fames ac ante ipsum primis in faucibus</div>
                 </div>
             </div>
             </div>
        </div>
        </>
    )
}
export default Agency