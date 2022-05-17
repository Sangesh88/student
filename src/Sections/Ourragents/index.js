import Card from "../../components/Card"

const Ourragents=()=>{
    const Card14DATA=[
        {   
            type:"secondary",
            tittle:"this is a tittle 1",
            img:"imga.jpg",
            paragraph:"this is a my house",
            rate:"345",
            f1:"23",
            f2:"45",
            f3:"78",
            footer:"it is a house footer",
        },

        {   type:"secondary",
             tittle:"this is a tittle 1",
             img:"imga.jpg",
             paragraph:"this is a my house",
             rate:"345",
             f1:"23",
             f2:"45",
             f3:"78",
            footer:"it is a house footer",

        },

        {  type:"secondary",
        tittle:"this is a tittle 1",
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
<div className="relative">
    <div className="w-[1110px] ml-60  "><img src="imgaa.jpg"/></div>
    <div className="flex absolute top-0 text-blue-900 text-2xl mt-20">
        <div className="h-12 w-2 bg-blue-900  ml-40 "></div>
        <div className="ml-4 -">Our Agents</div>
    </div>
    <div className="relative -mt-[800px] ml-40 z-40">
        <div className="bg-blue-900 h-10 w-10"></div>
        <div className="-mt-8 px-4  text-white"><i class="fa-solid fa-chevron-left"></i></div>
       <div classname="flex absolute right-0 top-[960px]">
           {
            Card14DATA.map((d)=>{
                <>
                
                <Card type={d.type} tittle={d.tittle} img={d.img} paragraph={d.paragraph} rate={d.rate} f1={d.f1} f2={d.f2} f3={d.f3} footer={d.footer}/>
                </>
            })
           }
       </div>
      
    </div>
    <div className="flex mt-[550px] absolute left-0">
           <div className=" w-96 h-96 bg-blue-50 "></div>
           <div className="h-96 w-96 bg-blue-900 ml-10"></div>
       </div>
     
    
</div>
    )
}
export default Ourragents