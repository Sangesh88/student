import Button from "../Button"

const Card=(props)=>{
return(
<>
{props.type==="secondary" ?
(<>
<div className="   shadow-md rounded-md mx-6 my-6">
<div className=" relative">
        <div className=""><img src={props.img}/></div>
        <div className="bg-red-600 absolute top-0 bottom-0 right-0 left-0 hover:opacity-40 opacity-50"></div>
        <div className="absolute top-0 mt-8 px-4 "> 
            <div className="text-2xl font-bold  ">{props.title}</div>
            <div className="text-sm mt-2  ">{props.paragraph}</div>
            <div className="text-xs mt-4 ">{props.footer}</div>
        </div>

    </div>
   
</div>
</>)
:
<>

{props.type==="primary"  ?
(<div className="shadow-md pb-2  "> 
<div className=""><img src={props.img}/></div>
<div className="px-8">
    <div className="mt-8 text-2xl text-[#515ee0]  font-semibold">{props.title}</div>
    <div className="mt-2 text-xl text-gray-700 ">{props.paragraph}</div>
    <div className="flex mt-4 text-sm text-gray-500 justify-between hidden ">
    <div className=""> <i class="fa-solid fa-hospital mr-2"></i>{props.f1}</div>
    <div className="ml-4"><i class="fa-solid fa-bed mr-2"></i>{ props.f2}</div>
    <div className="ml-4"><i class="fa-solid fa-bath mr-2"></i>{props.f3}</div>

    </div>
    <div className="flex my-6 justify-between"> 
    <div className="text-xl font-semibold">{props.rate}</div>
    <div className="mx-4"><Button>Viwe Details</Button></div>

    </div>

</div>




</div>)
:
(<div className="border-4 rounded-md   my- px-4 shadow-md py-10 border-b-green-700">
<div className="text-green-700 text-4xl my-8">{props.icon}</div>
<div className="mt-3 text-gray-900 text-xl my-4 font-semibold">{props.title}</div>
<div className="mt-3 text-sm text-gray-500 mb-8 leading-6">{props.paragraph}</div>


</div>)
}
</>

}

</>

)


}
export default Card