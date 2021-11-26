import React, {useState} from "react";

const Reports = (reportData) => {

const [data] = useState(reportData)
const dateTimeGetter = (timestamp) => {
    const datetime = new Date(timestamp)
    const date = `${datetime.getDay()}/${datetime.getMonth()}/${datetime.getFullYear()}`
    const time = `${datetime.getHours()}:${datetime.getMinutes()}`
    return [date, time]   
}

const stateTranslation = (status) => {
    const engStatus = ["TICKET_CREATED", "PACKAGE_RECEIVED", "IN_TRANSIT", "NOT_YET_SHIPPED", "OUT_FOR_DELIVERY", "WAITING_FOR_CUSTOMER_ACTION", "DELIVERED"];
    const arStatus = ["تم انشاء الشحنة", "تم استلام الشحنة من التاجر", "في مرحلة الشحن", "الشحنة لم تخرج", "الشحنة خرجت للتسليم", "في انتظار إجراء العميل", "تم التسليم"];

    var statePos = engStatus.indexOf(status);
    return arStatus[statePos]

}


    return (
<div className="ReportMainCont">
    <p className="subTitle">تفصيل الشحنة</p>
    <div className="reportsMainCont">
    <div className="flexRow" style={{ height:'40px', width:'100%', alignItems:'start',justifyContent:'space-between', marginBottom:'16px', textAlign:'right'}}><p className="listTitle">الفرع</p><p className="listTitle">التريخ</p><p className="listTitle">الوقت</p><p  className="listTitle">تفاصيل</p></div>
 
    {data && data.reportData.map((event, index) => <div key={index} className="flexRow" style={{height:'40px', width:'100%', alignItems:'flex-start', justifyContent:'space-between', fontSize:'12px', textAlign:'right'}}><p className="listEntries">-</p><p className="listEntries">{dateTimeGetter(event.timestamp)[0]}</p><p className="listEntries">{dateTimeGetter(event.timestamp)[1]}</p><p className="listEntries">{stateTranslation(event.state)}</p></div>)}
   
    </div>
</div>
    )
}
export default Reports