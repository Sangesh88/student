import Card from "../../components/Card"
import Heading from "../../components/Heading"

const Cleaning_Services=()=>{
    const HEADINGDATA=[{
        Heading:"Services",
        Paragraph:"we are provided best cleaning service in your area"
    }]

        
    const CARDDATA=[
        {
            type:"primary",
            tittle:"this is a tittle 1",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
            tittle:"this is a tittle 2",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
            tittle:"this is a tittle 3",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
            tittle:"this is a tittle 4",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
            tittle:"this is a tittle 5",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
            tittle:"this is a tittle 6",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"secondary",
            tittle:"this is a tittle 7",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"secondary",
            tittle:"this is a tittle 8",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },
    ]


return(

    <>
    {HEADINGDATA.map((d)=>(
        <div>
                <Heading Heading={d.Heading} Paragraph={d.Paragraph}/>

        </div>
    ))}
    <div className="flex flex-wrap  mx-4 justify-between ">
    {CARDDATA.map((d)=>(

        <div className="w-60 my-4 mx-4">
            <Card type="primary" tittle={d.tittle} paragraph={d.paragraph} img={d.img}/>
        </div>
    ))}
    </div>



    
    </>
)

}
export default Cleaning_Services