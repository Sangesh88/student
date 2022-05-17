import Card from "../../components/Card"


const Firstcard=()=>{
    const DATA=[
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
            type:"secondary",
            tittle:"this is a tittle 2",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"",
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
            type:"secondary",
            tittle:"this is a tittle 5",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"",
            tittle:"this is a tittle 6",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
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
        },{
            type:"",
            tittle:"this is a tittle 9",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"primary",
            tittle:"this is a tittle 10",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"secondary",
            tittle:"this is a tittle 11",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },{
            type:"",
            tittle:"this is a tittle 12",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        }
    

    ]
  return(
      <>
      <div className="flex space-x-6 flex-wrap ">
    {DATA.map((d)=>(
        <div className="w-60 mt-10  ">
                <Card type={d.type} tittle={d.tittle} img={d.img} paragraph={d.paragraph} rate={d.rate} f1={d.f1} f2={d.f2} f3={d.f3} footer={d.footer} />
                </div>
    ))
    }
</div>
      </>
  )

}
export default Firstcard
    
