import Button from "../../components/Button"
import Logo from "../../components/Logo"
import Navigation from "../../components/Navigation"

const Header11=()=>{
    const DATA=[
        {Navname:"Home"},
        {Navname:"About us"},
        {Navname:"Service"},
        {Navname:"project"},
        {Navname:"Blog"},
        {Navname:"Pages"},
        {Navname:"Contact us"},
    ]
    return(
        <>
        <div className="flex justify-between bg-[#18191B] items-center py-8 ">
            <div className="ml-4 text-[#75DAB4]  text-2xl flex "><Logo/>Creasoft</div>
            <div className="w-3/6 flex space-x-8">
        {DATA.map((d)=>(
            <div className="">
        <Navigation Navname={d.Navname} className="text-gray-100 hover:text-[#75DAB4] cursor-pointer"/>
        </div>
        ))
        }
        </div>
        <div className="mr-4 py-3 px-6 h-12 text-white" style={{backgroundColor: "#013A6B",
  backgroundImage: "-webkit-linear-gradient(70deg, #18121B 50%, #75DAB4 50%)",
  }}>Get A Quete
            {/* <Button className="grad bg-gradient-to-br from-gray-400 to-gray-900 hover:from-pink-500 hover:to-yellow-500">Get A Quete</Button> */}
            </div>
        </div>
        </>
    )
}
export default Header11