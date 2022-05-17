import PreviousMap from "postcss/lib/previous-map"

const Card1=(props)=>{
return(

<>
<div className="border-4 rounded-md w-72   my- px-4 shadow-md py-10 border-b-green-700">
<div className="text-green-700 text-4xl my-8">{props.icon}</div>
<div className="mt-3 text-gray-900 text-xl my-4 font-semibold">{props.H}</div>
<div className="mt-3 text-sm text-gray-500 mb-8 leading-6">{props.P}</div>


</div>

</>

)


}
export default Card1