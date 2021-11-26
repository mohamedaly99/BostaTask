import React, {useState} from "react";

const MainPageFirstInfo = (generalData) => {

    const [data] = useState(generalData)
    const date = new Date(data.generalData.CurrentStatus.timestamp)
    const expDate = new Date(data.generalData.PromisedDate)



const stateTranslation = (state) => {
 
    if(state === "DELIVERED") return "تم التسليم"
    else return state


    //all the other states 
    // I dont know the statuses to be able to translate 
    //the state of the shipment as all the tracking numbers 
    //provided has a DELIVERED state.
}


    return (
        <div className="flexRow mobileRow">
            <span className="infoPartCont">
                <h4>({data.generalData.TrackingNumber}) رقم الشحنة</h4>
                {data.generalData['CurrentStatus'] && <h3 style={data.generalData['CurrentStatus'].state === "DELIVERED" ? {color:'green'}:{}}>{stateTranslation(data.generalData.CurrentStatus.state)}</h3> }
            </span>
            <span className="infoPartCont">
                <h4>اخر تحديث</h4>
                {data.generalData['CurrentStatus'] && <h3>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</h3>  }
            </span>
            <span className="infoPartCont">
                <h4>اسم التاجر</h4>
                <h3>-</h3>
            </span>
            <span className="infoPartCont">
                <h4>موعد تسليم خلال</h4>
                <h3>{`${expDate.getDate()}/${expDate.getMonth() + 1}/${expDate.getFullYear()} `}</h3>
            </span>

        </div>
    )
}
export default MainPageFirstInfo;