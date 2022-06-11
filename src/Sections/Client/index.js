import Card from "../../components/Card"


const Client=()=>{
    return(
        <>
        <div className="bg-[#18191B] w-full mt-40 mb-10 relative">
            <div className="text-center ">
            <div className="text-[#75DAB4] text-xl pt-20">Testimonial</div>
            <div className="text-5xl font-semibold text-white mt-4">Client Say About Us</div>
            <div className="text-sm  text-white mt-4">Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a<br/> orci nunc. Suspendisse ac convallis sapien, quis commodo libero.  </div>
            </div>
            <div className="flex justify-between  pb-10 mx-10">
            <div className="w-[500px]  bg-black -skew-y-6 delay-300 transition  hover:skew-y-0 text-center mt-10 "><Card title="150" paragraph="Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a <br/> orci nunc. Suspendisse ac convallis sapien, quis commodo libero." /></div>
            <div className="w-[500px]  bg-black ml-10 delay-300 transition  -skew-y-6 hover:skew-y-0 text-center mt-10"><Card title="150" paragraph="Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a <br/> orci nunc. Suspendisse ac convallis sapien, quis commodo libero." /></div>
            <div className="w-[500px] bg-black ml-10 -skew-y-6 delay-300 transition  hover:skew-y-0 text-center mt-10"><Card title="150" paragraph="Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a <br/> orci nunc. Suspendisse ac convallis sapien, quis commodo libero." /></div>
            </div>      
        </div>
        </>
    )
}
export default Client