import Button from "../../components/Button"
import Heading from "../../components/Heading"

const YS=()=>{

    const YSDATA=[{
        Heading:"Why us",
        Paragraph:"we are provided best cleaning service in your area"

    }]
    return(
        <>
        {YSDATA.map((d)=>(
<div>
    <Heading Heading={d.Heading} Paragraph={d.Paragraph}/>
</div>
        ))}
        
        <div className="flex container mx-auto ">
            <div className="w-1/2 p-8"><img src="imge.jpg"/></div>
            <div className="w-1/2 p-8">
                <div className="text-4xl font-semibold"> Heading 1</div>
                <div className="text-sm text-justify mr-16 mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


</div>
                <div className="mt-8 flex ">
                    <div><Button type="primary">Residential</Button></div>
                    <div className="mx-20"><Button type="secondary" className="text-[#515ee0] border-[#515ee0] border" >Commercial</Button></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default YS


