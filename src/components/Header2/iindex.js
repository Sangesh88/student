import Button from "../Button"
import Logo from "../Logo"
import Navigation from "../Navigation"

const Header2=()=>{
    const DATA=[
        {Navname:"Home"},
        {Navname:"residenc"},
        {Navname:"Commeercial"},
        {Navname:"About us"},
        {Navname:"Contact us"},
    ]
return(
<>
<div className="flex container mx-auto align-middle items-center justify-between py-4 " >
    <div className="w-1/6"><Logo/></div>
    <div className="w-3/6 flex space-x-8">
        {DATA.map((d)=>(
            <div className="">
        <Navigation Navname={d.Navname} className="text-[#515ee0] hover:text-[#2834b3] cursor-pointer"/>
        </div>

        ))
        }
        </div>
    <div className=""><Button className="bg-[#515ee0]  w-full hover:bg-indigo-800 cursor-pointer">Login </Button></div>
    <div className=""><Button type="secondary" className="border-[#515ee0] text-[#515ee0] hover:text-[#2834b3] hover:boder-[#515ee0] cursor-pointer w-full">Signup </Button></div>


</div>
</>


)


}
export default Header2