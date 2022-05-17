import Button from "../../components/Button"

const Touch=()=>{
return(
<>
<div className=" bg-white border  relative mb-8 py-14 rounded-md shadow-md flex  container justify-between align-middle w-full items-center">
    <div className=" w-3/5 mx-14">
    <div className="text-4xl">Get In Touch</div>
    <div className="flex container mt-4">
    <div><input className="bg-gray-100 py-4  rounded-md px-6 "  placeholder="Your Name"/></div>
    <div><input className="bg-gray-100 py-4  rounded-md px-6  ml-8"  placeholder="Your Email"/></div>

        
     
        
    </div>
    <div><input className="bg-gray-100 py-4 w-full rounded-md px-6 mt-8 mb-6" placeholder="Website"/></div>
    <div><input className="bg-gray-100 w-full rounded-md px-6 py-12  mb-6" placeholder="Your Comment"/></div>

    <div><Button className="bg-gray-700 hover:bg-orange-600">SEND</Button></div>

   
    </div>
    <div className="relative border w-2/5 mx-14">
    <div className=" "><img src="imgb.jpg"/></div>
    <div className=" absolute top-0">
    <div className="">Limited Offer</div>
    <div>First clean 50% discount</div>
    </div>
    </div>

</div>

</>

)

}
export default Touch