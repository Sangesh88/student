import Button from "../../components/Button"
import Button1 from "../../components/Button1"
import Logo from "../../components/Logo"
import Navigation from "../../components/Navigation"

const Header=()=>{
return(

<>

<div className="flex w-full my-4  align-middle items-center">
    <div className="w-1/6 "><Logo/></div>
    <div className="w-3/6"><Navigation/></div>
    <div className="w-2/6 flex justify-end space-x-4 mx-4">
        <Button>Login</Button>
        <Button1 className="w-32">Signup</Button1>
         </div>
</div>
</>

)


}
export default Header