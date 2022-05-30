import Button from "../../components/Button"

const Section24=()=>{
    return(
        <>
        <div className="  ">
            <div className=" bg-[#0E2C7B] hidden md:block md:ml-[330px] text-xl font-semibold md:py-36 h-[630px] md:mt-[750px] text-center text-white " ></div>
        </div>
        <div>
            <div className=" md:mt-[800px] md:ml-96 md:text-white text-blue-900 md:pl-80 flex justify-center md:justify-start md:flex-none md:top-0  md:absolute text-2xl ">Find a home away from HOME</div>
            <div className="bg-white md:-mt-[500px] md:ml-40  absolute md:w-3/4 w-full shadow-lg">
                <div className="md:px-10  md:py-10 flex md:flex-row flex-col justify-center  text-center align-middle items-center w-full md:justify-between space-y-4 mt-10 md:mt-0" >
                  <div className="">
                      <select className=" md:px-20 px-40 md:py-6 py-4 text-xs bg-blue-50 text-blue-900">
                          <option>Select</option>
                          <option>a</option>
                          <option>b</option>
                          <option>c</option>
                      </select>
                      </div> 
                  <div className="">
                  <select className="md:px-20 px-40 md:py-6 py-4 text-xs bg-blue-50 text-blue-900">
                          <option>Select</option>
                          <option>a</option>
                          <option>b</option>
                          <option>c</option>
                      </select>
                  </div> 
                  <div className="">
                  <select className="md:px-20 px-40 md:py-6 py-4 text-xs bg-blue-50 text-blue-900 ">
                          <option>Select</option>
                          <option>a</option>
                          <option>b</option>
                          <option>c</option>
                      </select>
                </div>    
                </div>
                <div className="md:px-10 md:flex md:justify-between space-y-4 mt-4 md:mt-0 flex md:flex-row flex-col justify-center  text-center align-middle items-center w-full" >
                  <div className="">
                      <select className="py-4 md:px-20 px-40 md:py-6 text-xs bg-blue-50 text-blue-900">
                          <option>Select</option>
                          <option>a</option>
                          <option>b</option>
                          <option>c</option>
                      </select>
                      </div> 
                  <div className="">
                  <select className="md:px-20 px-40 md:py-6 py-4 bg-blue-50 text-xs text-blue-900">
                          <option>Select</option>
                          <option>a</option>
                          <option>b</option>
                          <option>c</option>
                      </select>
                  </div> 
                  <div className="">
                  <select className="md:px-20 px-40 md:py-6 py-4 text-xs bg-blue-50 text-blue-900 ">
                          <option>Select</option>
                          <option>a</option>
                          <option>b</option>
                          <option>c</option>
                      </select>
                </div>    
                </div>
                <div className="flex md:flex-row flex-col  align-middle items-center w-full mt-8">
                <div className="md:ml-12">Size</div>
                <div className="md:ml-80 ">Price</div>
                </div>
                <div className="md:mx-96  my-10 flex md:flex-row flex-col justify-center  text-center align-middle items-center ">
                    <Button className="bg-blue-700 px-48 md:px-0"> Find</Button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Section24