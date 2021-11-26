import React,{useState} from "react";
import burger from './burger.png'
import bostaImg from './bosta.png'

const MobileTopBar = () => {

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    return(
<header className= "topBarMainCont">
    <div className="topBarFirstCont">
<img alt="logo" src={bostaImg} className="bostaImg"></img>
</div>
<img alt="burger" src={burger} style={{width:'20px'}} onClick={() => {isBurgerMenuOpen? setIsBurgerMenuOpen(false) : setIsBurgerMenuOpen(true)}}/>
{isBurgerMenuOpen && <div className="burgerMenuContainer">
    <a>الرئيسية</a>
    <a>الاسعار</a>
    <a>كلم المبيعات</a>
    <a>تتبع شحنتك</a>
    <a>تسجيل الدخول</a>
    <a style={{color: "red", textAlign:'left', marginTop:'6px'}}>ENG</a>
    </div>}
</header>
    )
}
export default MobileTopBar;