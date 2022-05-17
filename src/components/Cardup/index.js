import Button from "../Button"

const Cardup=(props)=>{
    return(
        <>
        <div className={`${props.className}`}>
        <div><img src={props.img}/></div>
        <div className="px-6">
            <div className={`text-2xl text-red-900 font-semibold  ${props.Titleclassname}`}>{props.Title}</div>
            <div className={`text-xl text-red-500  ${props.Paragraphclassname}`}>{props.Paragraph}</div>
        </div>
        <div className="flex justify-center my-4"><Button className="w-full">Read More</Button></div>

        </div>
        </>
    )
}
export default Cardup