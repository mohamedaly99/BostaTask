import React from "react";
import BostaImg from '../assets/bosta.png'

const TopBar = () => {
    return(
<header className= "topBarMainCont">
    <div className="topBarFirstCont">
<img alt="logo" src={BostaImg} className="bostaImg"></img>
</div>
<div className="topBarSecondCont">
<div><a onClick={() => {window.location.replace("https://www.google.com/")}}>الرئيسية</a></div>
<div><a>الاسعار</a></div>
<div><a>كلم المبيعات</a></div>

</div>
<div className="topBarSecondCont">
<div><a>تتبع شحنتك</a></div>
<div><a>تسجيل الدخول</a></div>
<div><a style={{color: "red"}}>ENG</a></div>
</div>
</header>
    )
}
export default TopBar