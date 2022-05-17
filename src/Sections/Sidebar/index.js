import Button from "../../components/Button"

const Sidebar=()=>{
    return(
        <>
        <div className="border-2 flex-col ">
            <div className="my-8 text-center text-4xl font-semibold">`ATLA`</div>
            <div className="mx-8"><Button>Administrater</Button></div>
            <div className="text-left ml-10 my-10">
                <div className="text-purple-700 text-xl ">Live</div>
                <div className="my-2 text-gray-700">Schedule</div>
            </div>
            <div className="">
                <div className="mx-4 text-gray-400 text-lg">Reports</div>
                <div className="text-left ml-10 my-4 ">
                <div className="my-2 text-gray-700">Expired Sessions</div>
                <div className="my-2 bg-gray-100  text-gray-900 rounded-md w-40 p-2 ">Leads</div>
                <div className="my-2 text-gray-700">Agent</div>
                <div className="my-2 text-gray-700">Shift Report</div>
                </div>

            </div>
            <div className="my-10 ">
                <div className="text-gray-400 text-lg mx-4">Support</div>
                <div className="text-left ml-10 my-4 text-gray-700">
                <div>Get help</div>
                <div className="my-2"> Submit Feedback</div>
                </div>
            </div>
            <div className="text-left ml-10 text-gray-700">
                <div>Setting</div>
                <div className="my-2 text-purple-700">Log out</div>
            </div>

        </div>
        </>
    )
}
export default Sidebar