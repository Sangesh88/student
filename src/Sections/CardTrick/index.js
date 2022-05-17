import Button from "../../components/Button"
import Card from "../../components/Card"

const CardTrick=()=>{
    const CARDTrickDATA=[
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
        },
    ]
return(
    <>
    <div className="flex  ">
    {CARDTrickDATA.map((d)=>(
<div className="w-60 m-4 bg-green-200  -ml-32">
    <Card tittle={d.tittle} paragraph={d.paragraph}/>
</div>

    ))}
    </div>
    </>
)
}
export default CardTrick