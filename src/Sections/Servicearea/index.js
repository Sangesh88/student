import Card from "../../components/Card"
import Heading from "../../components/Heading"

const Serviceaera=()=>{
    const c=0
    const ServiceCardDATA=[
        {
            Heading:"This is a Card",
            paragraph:"over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "

        },
        {
            Heading:"This is a Card",
            paragraph:"over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "

        },
        {
            Heading:"This is a Card",
            paragraph:"over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "

        },
        {
            Heading:"This is a Card",
            paragraph:"over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "

        },
        {
            Heading:"This is a Card",
            paragraph:"over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "

        },
        {
            Heading:"This is a Card",
            paragraph:"over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "

        }
    ]
    return(
        <>
        <div className="bg-[#faf9fe]  ">
        <div className="container mx-auto">
            <div className="rilative ">
                <Heading heading="Services" headingclassName=" text-[#4db29]" className="pt-40 " paragraph="over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

"/>
            </div>
            <div className="flex ">
                {ServiceCardDATA.map((d,index)=>(
                    <div className={`bg-green-600 left-[calc(${index*100})px]  absolute`}>
                        <Card title={d.Heading} paragraph={d.paragraph}/>                    </div>
                       
                ))}
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Serviceaera