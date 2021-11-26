import React from "react";
import question from '../assets/question.png'

const ShipmentInfo = () => {
    return (
    <div className="flexColumn" style={{width:'40vw'}}>
        <p className="subTitle">عنوان الستسليم</p>
        <div>
            <p className="content">امبابة شارع طلعت حرب ميدان العمال بحوارالبرنس </p>
            <div className="flexRow"> 
            <img alt="question" src={question} width={100}/>
            <div className="flexColumn">
            <p style={{fontWeight:'bold'}} className="content">هل يوجد مسكلة في شحنتك</p>
            <button>ابلاغ عن مشكلة</button>
            
            </div>
            
            </div>
        </div>
    </div>
    )
}
export default ShipmentInfo;