import React, {useEffect, useState} from "react";
import MainPageFirstInfo from "./mainPageFirstInfo";
import check from './check.png'
import StepperComponent from "./stepperComponent";
import ShipmentInfo from "./shipmentInfo";
import axios from 'axios';
import Reports from './reports'

const MainBody = () => {

    const [data, setData] = useState()
    const [onFirstLoad, setOnFirstLoad] = useState(false)

useEffect(() => {
    if(onFirstLoad === false){
        axios
        .get(`https://tracking.bosta.co/shipments/track/7234258`)
        .then((res) => {
          setData(res.data)
        })
        setOnFirstLoad(true)
    }
},[onFirstLoad])


    return (
        <div className="BodyMainCont">
{data && <MainPageFirstInfo generalData={data}/>}
<div className="BodySubCont">
  {data && <StepperComponent event={data}/> }   
    <div style={{marginTop:'20px',display:'flex', flexDirection:'row-reverse', justifyContent:'space-around', alignItems:'center'}}><p>تم انشاء الشحن</p><p>تم استلام الشحنة من التاجر</p><p>الشحنة خرحت للتسليم</p><p>تم التسليم</p></div>
</div>
<div className="mobileRow" style={{justifyContent:'space-around'}}>
{data && <Reports reportData={data.TransitEvents}/> }
    <ShipmentInfo/>
</div>
        </div>
        
    )
}
export default MainBody;