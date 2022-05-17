const Leave=(props)=>{
return(
<>
<div className="mt-16 text-gray-900 text-2xl">
    <div className="text-2xl font-semibold">{props.H}</div>
    <div className="text-xl text-gray-700 mt-4">{props.P}</div>
    <div className="flex ">
    <div className="text-lg font-semibold mt-4 mb-4">{props.B}</div>
    <div className="mt-4 ml-4 text-orange-600"><i class="fa-solid fa-arrow-right"></i></div>

    </div>
    </div>

</>



)


}
export default Leave