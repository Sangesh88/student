import Button from "../../components/Button"

const Benifits=()=>{
return(
<>
<div className="mt-40 flex mx-12 ">
    
    <div className="w-1/2  mb-8"><img src="imgb.jpg"/></div>

    <div className="w-1/2 ml-14">
    <div className="text-gray-600 text-lg">OUR BENEFITS</div>
    <div className="mt-2 text-4xl font-semibold">Don't Bother Yourself <br/> with Home Cleaning</div>
    <div className="flex mt-6">

        <div className=" flex">
            <div className="text-orange-600 text-2xl "><i class="fa-solid fa-circle-check"></i></div>
            </div>
        <div className="text-xl ml-4 ">
            <div className="">Performers are Selected and Trained</div>
        
        <div className="text-gray-600 mt-2">Tristique senectus et netus et malesuada fames odio. Interdum velit laoreet id donec ultrices sodales.</div>
        </div>
    </div>
    <div className="flex my-6 ">
        <div className="flex ">
        <div className="text-orange-600 text-2xl"><i class="fa-solid fa-circle-check"></i></div>
        </div>
        <div className="text-xl ml-4">
        <div>Cliners are Monitored, Including Reviews</div>
    
    <div className="text-gray-600 mt-2">Praesent elementum facilisis vel fringilla ullamcorper eget. Cras fermentum odio feugiat turpis.</div>
    </div>
    </div>
    <div>
    <div><Button className="bg-gray-700 hover:bg-orange-600">Learn More</Button></div>
    </div>

    </div>


</div>
</>

)


}
export default Benifits