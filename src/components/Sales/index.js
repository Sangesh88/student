import Button1 from "../Button1"
import Card from "../Card"
import Heading from "../Heading"

const Sales=()=>{
return(

<>
<div>
<div className="flex justify-between  w-full align-middle items-center">
<div className="">
    <Heading H="Latest Real Estate" P="Find the latest homes for sale, property news  real estate market data"/>
</div>
<div>
    <Button1 className="border border-green-700 text-green-700 ">View All Properties</Button1>

</div>
  
</div>
<div className="flex justify-between container mx-auto my-8">
    <Card title="VIA DI BOCCEA ST." img="imgb.jpg" f1="2 Rooms" f2="1 Bads" f3="1Baths" rate="$ 830" type="Villa"  />
    <Card title="VIA DI BOCCEA ST." img="imgb.jpg" f1="2 Rooms" f2="1 Bads" f3="1Baths" rate="$ 830" type="Villa"  />
    <Card title="VIA DI BOCCEA ST." img="imgb.jpg" f1="2 Rooms" f2="1 Bads" f3="1Baths" rate="$ 830" type="Villa"  />

</div>



</div>

</>

)


}
export default Sales