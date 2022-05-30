import Button from "../../components/Button"
import Card from "../../components/Card"

const Linoor=()=>{
    return(
        <>
        <div className="mx-10 my-10 "><button type="button" class="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-500 hoveer:bg-gradient-to-left hover:to-yellow-500 px-10 py-4 rounded-md">Read more</button></div>
        <div className="bg-gray-100 w-52 ml-20 my-4 mt-10 shadow-xl border-2 rounded-md hover:bg-black hover:text-orange-300 " >
                <div className="h-10 w-10 bg-[#e35f15] rounded-full ml-4 mt-4"></div>
                <div className="text-[#e35f15] pl-4 pt-2 text-2xl">Corporate<br/> Identety</div>
                <div className="text-justify px-4 pt-2 text-xs" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ornare eleifend.</div>
                <div className="ml-4 my-2 "><i class="fa-solid fa-arrow-right-long"></i></div>
                </div>
                <div className="bg-blue-700 clip-path: polygon(50% 50%, 100% 100%, 100% 100%) w-40 h-24 mx-20 my-10"></div>
        </>
    )
}
export default Linoor