const Heading=(props)=>{
return(
<>
<div className={`flex flex-col justify-center container mx-auto align-middle text-center items-center  my-16 ${props.className}`} >
<div className={` text-4xl font-semibold ${props.headingclassName}`}>{props.heading}</div>
<div className={`text-gray-500 text-sm mt-2 ${props.paragraphclassname}`}>{props.paragraph}</div>

</div>

</>


)


}
export default Heading