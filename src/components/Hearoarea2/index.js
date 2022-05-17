import Button from "../Button"
import Button1 from "../Button1"
import Calculate from "../Calculate"

const HeroArea2=()=>{
return(
<>

<>
    <div className="relative align-middle flex items-center"><img src="imgbanner.jpg"/>
    <div className="absolute  text-white mx-72">
        <div className="flex">
        <div className="text-orange-500">|</div>
        <div className="">MAINTENANCE</div>
        </div>
        <div className="mt-3 text-6xl font-semibold leading-tight"> Quick Cleaning<br/> of the Apartment</div>
        <div className="mt-8"> <Button className="bg-gray-700 text-xs flex justify-center text-center align-middle items-center hover:bg-[#131a70] tracking-widest">LEARN MORE</Button></div>

    </div>
   
    </div>
    <div className="w-full container mx-10 -mt-16 z-50 absolute shadow-md">
        <Calculate/>
    </div>
</>

</>



)



}
export default HeroArea2