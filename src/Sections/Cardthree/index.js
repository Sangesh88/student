import Cardtwo from "../../components/Cardtwo"

const Cardthree=()=>{
    const CardDATA=[
    {
        img:"imgc.jpg",
        Title:"This is a new house",
        Paragraph:"This is a new house and this is a very big",

    },
    {
      img:"imgc.jpg",
      Title:"This is a new house",
      Paragraph:"This is a new house and this is a very big",

  },
  {
    img:"imgc.jpg",
    Title:"This is a new house",
    Paragraph:"This is a new house and this is a very big",

},
{
  img:"imgc.jpg",
  Title:"This is a new house",
  Paragraph:"This is a new house and this is a very big",

}

    ]
  return(
    <>
    <div className="flex mx-16">
    {CardDATA.map((d)=>(
        <div className="w-[300px]   mx-4 my-10 ">
        <Cardtwo img={d.img} Title={d.Title} Paragraph={d.Paragraph} className="border p-4 bg-slate-100" titleclassname="text-blue-700" paragraphclassname="text-blue-400"/ >
        </div>
    ))}
    </div>
    </>
  )  
}
export default Cardthree