import Button from "../Button"

const Calculate=()=>{
return(
<>
<div className=" bg-white px-14 flex justify-between align-middle items-center py-8  relative rounded-md">
    {/* <div className="tracking-widest">
    <div className="text-3xl font-semibold">Calculate</div>
    <div className="text-xl mt-2">Your Cleaning Cost </div>

    </div> */}

    {/* <div><input className="bg-gray-100 py-4 rounded-md px-6 " type="email" placeholder="Your Email"/></div> */}
    <div className=""><select className="w-56 py-4 px-4 bg-gray-100 tracking-widest">
        <option>Square Meters*</option>
        <option>b</option>
        <option>c</option>
        <option>d</option>

        </select></div>
        <div className=""><select className="w-56 py-4 px-4 bg-gray-100 tracking-widest">
        <option>Square Meters*</option>
        <option>b</option>
        <option>c</option>
        <option>d</option>

        </select></div>
    <div className=""><select className="w-56 py-4 px-4 bg-gray-100 tracking-widest">
        <option>Square Meters*</option>
        <option>b</option>
        <option>c</option>
        <option>d</option>

        </select></div>
    <div><Button className="bg-gray-700 hover:bg-[#131a70]">CALCULATE</Button></div>
    <div className="h-2 bg-[#515ee0] absolute bottom-0 w-60 left-0 rounded-l-md"></div>

</div>

</>


)


}
export default Calculate