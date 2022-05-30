import Card from "../../components/Card"

const Featured=()=>{
    const card12DATA=[
        {   type:"secondary",
           img:"imgh.jpg",
            Title:"The Feature Card",
            Paragraph:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        },
        {   type:"secondary",
           img:"imgh.jpg",
            Title:"The Feature Card",
            Paragraph:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {   type:"secondary",
           img:"imgh.jpg",
            Title:"The Feature Card",
            Paragraph:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        
    ]
    const Card13DATA=[
        {   type:"secondary",
           img:"imgb.jpg",
            Tityle:"he Feature Card",
            Paragraph:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {   type:"secondary",
           img:"imgb.jpg",
            Tityle:"he Feature Card",
            Paragraph:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {   type:"secondary",
             img:"imgb.jpg",
            Tityle:"he Feature Card",
            Paragraph:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
    ]
    return(
        <>
        <div className="relative  -z-10">
        <div className="bg-blue-50 md:h-[1200px] h-[1840px] ml-80 md:-mt-40 " ></div>
        <div className="flex items-center  right-[150px] absolute md:top-[100px] top-0 mt-2 ">
            <div className="  w-2 z-40"></div>
            <div className="ml-6 text-blue-900 text-3xl font-semibold">Featured Properties</div>
            </div>
            <div className="md:flex absolute top-0 mt-20 right-0 md:mt-[500px]">
           {
               card12DATA.map((d)=>(
                   <>
                   `<div className="md:w-96  mr-10 md:-mt-72  bg-blue-900  ">
                       <Card type={d.type} title={d.Title} paragraph={d.Paragraph} img={d.img}/>
                   </div>
                   </>
               ))
           }
        </div>
        <div className="md:flex absolute  md:right-0 top-[800px]  ">
           {
               card12DATA.map((d)=>(
                   <>
                   `<div className="md:w-96  md:-mt-32 mr-10 bg-blue-900">
                       <Card type={d.type} title={d.Title} paragraph={d.Paragraph} img={d.img}/>
                   </div>
                   </>
               ))
           }
        </div>
        </div>
       
        </>
    )

}
export default Featured