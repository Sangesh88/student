import Button from "../../components/Button"
import Heading from "../../components/Heading"

const Form=()=>{
    return(
        <>
        
            <div><Heading heading="Form" className="border-b-2 w-1/4"/></div>
            <div className="space-y-8">
            <div className=" w-full flex space-x-8">
                <div className="flex w-full flex-col ">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter your first name" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                </div>
                <div className="flex  w-full flex-col ">
                    <label>Last Name</label>
                    <input type="text" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                </div>
            </div>
            <div className="flex flex-col ">
                    <label>Last Name</label>
                    <input type="text" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                </div>
                <div className="flex flex-col ">
                    <label>Last Name</label>
                    <input type="text" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                </div>
                <div className="flex flex-col ">
                    <label>Last Name</label>
                    <input type="text" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                </div>
                <div className="flex flex-col ">
                    <label> One</label>
                    <input type="radio" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                    <input type="radio" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>

                </div>
                <div className="flex  align-middle items-center">
                <div className="flex flex-col ">
                    <input type="checkbox" placeholder="" className="border-b outline-none border-gray-200 focus:border-blue-600 focus:border"/>
                </div >
                <div className="ml-8">I accept</div>
                </div>
                <div className="flex justify-between items-center align-middle mx-20">
                    <Button className="w-52">Login</Button>
                    <Button type="secondary" className="border w-52">Signup</Button>
                </div>

                </div>
            

        
        </>
    )
}
export default Form