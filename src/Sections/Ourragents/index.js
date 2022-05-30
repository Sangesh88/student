import Button from "../../components/Button"
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
                <div className="w-40">
                <Card type={d.type} tittle={d.tittle} img={d.img} paragraph={d.paragraph} rate={d.rate} f1={d.f1} f2={d.f2} f3={d.f3} footer={d.footer}/>
                </div>
                </>
            })
           }
       </div>
      
    </div>
    <div className="">
    <div className="relative flex">
    <div className="flex mt-[550px] absolute left-0 ">
           <div className=" w-[500px]  bg-blue-50 "><img src="imgh.jpg"className=""/></div>
           <div className="bg-blue-900 absolute top-0 bottom-0 right-0 left-0 w-[500px] opacity-50"></div>
           <div className="absolute top-0 mt-8 px-4 "> 
            <div className="text-2xl font-bold text-blue-900 ">The Feacher Card</div>
            <div className="text-sm mt-12  text-blue-50 ">the leap into electronic typesetting, remaining essentially <br/> unchanged the leap into electronic typesetting,<br/> remaining essentially unchanged the leap into electronic typesetting,<br/> remaining essentially unchanged</div>
            <div className="text-2xl bg-blue-900 w-32 text-center text-blue-50  mt-20 ">Rate-500 </div>
        </div>
       </div>
       </div>
       <div className="relative ml-[600px]">
    <div className="flex mt-[550px] absolute left-0 ">
           <div className=" w-[500px]  bg-blue-50 "><img src="imgh.jpg"className=""/></div>
           <div className="bg-blue-200 absolute top-0 bottom-0 right-0 left-0 w-[500px] opacity-50"></div>
           <div className="absolute top-0 mt-8 px-4 "> 
            <div className="text-2xl font-bold text-blue-900 ">The Feacher Card</div>
            <div className="text-sm mt-12  text-blue-900 ">the leap into electronic typesetting, remaining essentially <br/> unchanged the leap into electronic typesetting,<br/> remaining essentially unchanged the leap into electronic typesetting,<br/> remaining essentially unchanged</div>
            <div className="text-2xl bg-blue-900 w-32 text-center text-blue-50  mt-20 ">Rate-500 </div>
        </div>
       </div>
       </div>
        </div>
     
    
</div>
    )
}
export default Ourragents