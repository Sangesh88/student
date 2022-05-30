import Card from "../../components/Card"

const News=()=>{
    return(
        <>
        <div className="bg-blue-900 mr-[500px] ">
        <div className="mt-[1000px]">
        <div className="flex pt-10  ml-20">
            <div className="h-12 w-2 bg-white"></div>
            <div className="ml-4 mt-4  text-white text-2xl font-semibold">News & Updates</div>
        </div>
        </div>

                
        <div class="grid grid-rows-3 grid-flow-col gap-4  ml-24  pl-1.5  py-10 ">
            <div className=" row-start-1 row-end-4 w-[450px] text-justify text-white -rotate-90 ">unchanged the leap into electronic typesetting,
                remaining essentially unchanged the leap into electronic typesetting,
                remaining essentially unchanged unchanged the leap into electronic typesetting,
                remaining essentially unchanged the leap into electronic typesetting,
                remaining essentially unchanged unchanged the leap into electronic typesetting,
                remaining essentially unchanged the leap into electronic typesetting,
                remaining essentially unchanged unchanged the leap into electronic typesetting,
                remaining essentially unchanged the leap into electronic typesetting,
                remaining essentially unchanged unchanged the leap into electronic typesetting,
                remaining essentially unchanged the leap into electronic typesetting,
                remaining essentially unchanged unchanged the leap into electronic typesetting,
                remaining essentially unchanged the leap into electronic typesetting,
                remaining essentially unchanged</div>
            <div className=" row-start-1 row-end-2 w-[250px]"><img src="imgg.jpg" className="w-full"/></div>
            <div className=" row-start-2 row-end-3 w-[250px]"><img src="imgg.jpg" className="w-full"/></div>
            <div className=" row-start-3 row-end-4 w-[250px]"><img src="imgg.jpg" className="w-full"/></div>
            <div className=" row-start-1 row-end-2 w-[250px]"><img src="imgg.jpg" className="w-full"/></div>
            <div className=" row-start-2 row-end-4 w-[250px]"><img src="imgg1.jpg"/> </div>
            <div className="row-start-1 row-end-3 w-[250px]"><img src="imgg1.jpg"/></div>
            <div className="row-start-3 row-end-4 w-[250px]"><img src="imgg.jpg" className="w-full"/></div>
        </div>
        </div>
        </>
    )
}
export default News