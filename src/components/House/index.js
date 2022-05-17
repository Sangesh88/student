const House=(props)=>{
return(

<>
<div className="relative  ">
    <div className="rounded-lg"><img src={props.I}/></div>
    <div className="absolute top-0 text-white my-40 mx-8">
    <div className="text-xl">{props.H}</div>
    <div className="text-4xl font-semibold">{props.P}</div>
    </div>
</div>

</>

)


}
export default House