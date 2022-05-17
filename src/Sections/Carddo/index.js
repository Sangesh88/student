import Cardup from "../../components/Cardup"

const Carddo=()=>{
    const NewDATA=[
        {
            img:"imgb.jpg",
            Title:"A new Car",
            Paragraph:"This is my car and it is a very nice",
        },
        {
            img:"imgb.jpg",
            Title:"A new Car",
            Paragraph:"This is my car and it is a very nice",
        },
        {
            img:"imgb.jpg",
            Title:"A new Car",
            Paragraph:"This is my car and it is a very nice",
        },
        {
            img:"imgb.jpg",
            Title:"A new Car",
            Paragraph:"This is my car and it is a very nice",
        }

    ]

return(
    <>
    <div className="flex mx-16">
    {NewDATA.map((d)=>(
        <div className="w-{300px} mx-4 my-10">
        <Cardup img={d.img} Title={d.Title} Paragraph={d.Paragraph} className="bg-red-100 boder p-4"/>
        </div>

    ))}
    </div>
    </>
    
)
    }
export default Carddo