import Logo from "../../components/Logo"
import Navigation from "../../components/Navigation"
import Navarea from "../Navarea"

const Header4=()=>{
    const NavDATA=[
        
           { Navname:"About us"},
        
          {  Navname:"Why Hire us"},

           { Navname:"Our Cleaning Service"},

           { Navname:"Bloger"},
           
           { Navname:"FAQs"},

           { Navname:"Own a Franchise"},
        
    ]
    return(
<>
<div className="   bg-[#faf9fe] flex  w-full top-0  fixed z-50  items-center">
    <div className=" flex w-full mx-32 px-16 bg-white rounded-b-md items-center shadow-md border text-center align-middle  ">
<div className="w-1/12   ">
    <Logo/>
</div>
<div className="w-full pl-24  flex justify-between  font-semibold">
{NavDATA.map((d)=>(
  <div className="ml-4">
      <Navigation className="text-xs font-light py-[1px]" Navname={d.Navname}/>
  </div>  
))}
</div>
<div className="w-[200px] ml-4    ">
    <Navarea/>
</div>
</div>
</div>
</>

    )
}
export default Header4