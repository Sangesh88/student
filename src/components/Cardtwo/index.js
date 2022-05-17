import Button from "../Button"

const Cardtwo=(props)=>{
    return(

   <>
   
   <div className={` ${props.className}`}>
       <div className=" "><img src={props.img}/></div>
       <div className="px-6">
           <div className={`text-2xl text-gray-700 font-semibold mt-6 ${props.titleclassname}`}>{props.Title}</div>
           <div className={`text-xl text-gray-500 mt-6 ${props.paragraphclassname}`}>{props.Paragraph}</div>
      </div>
      <div className="flex justify-center my-4"><Button className="w-full ">Login</Button> </div>
   </div>

   </>     
    )
}
export default Cardtwo