const Facecard=()=>{
    return(
        <>
        <div className=" md:relative ">
            <div className="md:flex md:flex-row w-full">
            <div className=" w-1/4 bg-black border-r-2 border"></div>
            <div className="w-1/4 bg-black border-r-2 border"></div>
            <div className="w-1/4 bg-black border-r-2 border"></div>
            <div className="w-1/4 bg-black border-r-2 border"></div>
            </div>
                <div className="md:absolute top-0 w-full md:flex md:flex-row items-center ">
                    <div className="text-2xl md:w-1/4 px-10 py-4 text-blue-900 w-full font-semibold text-center border">DECADE</div>
                    <div className="md:w-3/4 w-full px-10 flex flex-row justify-between bg-blue-50">
                        <div className="  py-6 space-x-8 text-xs w-full text-blue-900 tracking-widest  flex ">
                            <div className="">Services</div>
                            <div className="">Reviews</div>
                            <div className="">Contact Us</div>
                            <div className="">About Us</div>

                        </div>
                        <div className="md:flex items-center text-blue-700  text-center"><i class="fa-solid fa-bars md:block hidden"></i></div>

                    </div>
                </div>
                <div className="flex md:absolute md:top-32  ">
                    <div className="mx-10 md:mt-20 hidden md:block " >
                    <div><i class="text-xl fa-brands fa-instagram"></i></div>
                    <div><i class="text-xl fa-brands fa-facebook-f"></i></div>
                    <div><i class="text-xl fa-brands fa-tiktok"></i></div>
                    </div>
                    <div className="md:mx-8 flex flex-col mx-auto justify-center my-10">
                    <div className="text-xs text-blue-900 tracking-widest ">Spacialty</div>
                    <div className="text-blue-900 md:text-7xl text-5xl flex justify-center   font-light">TRUST THE RIGHT <br/> MOVEMENT</div>
                    </div>
                  </div>
                  
                    <div className=" absolute md:top-40 right-0 flex justify-center mx-10 md:mx-0">
                        <img src="imgz.jpg" width="400px" height="600px" className=""></img>
                        <div className="top-0 left-0 right-0 bottom-0 bg-blue-900 opacity-60 absolute z-10"></div>
                        <div className="absolute w-full bottom-0 py-2 items-center z-20 text-white flex justify-between px-2 ">
                            <div className="flex space-x-4 pl-10">
                            <i class="fa-solid fa-chevron-left"></i>
                            <i class="fa-solid fa-chevron-right"></i>

                            </div>
                            <div className="text-7xl stroke-white pr-10 ">02</div>
                        </div>
                    </div>
                    <div className="md:flex md:absolute w-full  md:top-96 mt-80 md:mt-0">
                    <div className=" md:w-[380px]   md:left-0 mx-10 "><img src="imgg1.jpg"></img></div>
                    <div className=" md:top-96 mt-10 md:mt-0  md:mx-24 mx-10 text-sm text-blue-900 text-justify md:w-56"> It was popularised in the 1960s with  the release of Letraset sheets  containing Lorem Ipsum passages, and more  recently with desktop publishing software  like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <div className="flex justify-between px-10 items-center bg-blue-50 md:w-1/4 md:absolute right-0 md:my-40 my-10  py-8 md:mx-0 mx-10 text-sm text-blue-900 tracking-widest">
                    <div className=" underline underline-offset-4">Contact us</div>
                    <div><i class="fa-solid fa-arrow-right text-blue-900"></i></div>
                    </div>
                     </div>
                     
                     
               
            </div>
           
        </>
    )
}
export default Facecard