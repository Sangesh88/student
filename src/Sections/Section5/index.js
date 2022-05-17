import Button from "../../components/Button"

const Section5=()=>{
    return(
        <>
        <div className="flex">
            <div className=" ml-20 mr-10 mt-40 ">
                <div className="text-4xl ">Enjoy Your Freshly
                        Cleaned Home</div>
                <div className="text-2xl text-blue-500 my-4">Professional Cleaning That
Leaves You Stress-Free</div>
                <div className="flex ">
                <div className="text-sm"><Button>GET A FREE ESTIMATE</Button></div>
                <div className="mx-4 text-sm"><Button>FIND A LOCATION</Button></div>
                </div>
            </div>
            <div className="w-3/4 mt-4 mr-4"><img src="imgh.jpg"/></div>
        </div>
        
        </>
    )
}
export default Section5