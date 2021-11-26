import React, { useState } from "react";
import check from './check.png'

const StepperComponent = (props) => {
// console.log(event.CurrentStatus.state)
     const [stepState, setStepState] = useState(3)


//     if(event.CurrentStatus.state === "TICKET_CREATED"){
//         setStepState(1)
//     } else if(event.CurrentStatus.state === "PACKAGE_RECEIVED"){
//         setStepState(2)
//     }else if(event.CurrentStatus.state === "IN_TRANSIT"){
//         setStepState(3)
//     } else if(event.CurrentStatus.state == "DELIVERED"){
//         setStepState(4)
//     }
//     console.log(stepState)
    // const arr = [1,2,3,4]
    // var state = event.CurrentStatus.state
    // console.log(event.CurrentStatus.state)

    // switch (state) {
    //     default: setStepState(1); break;
    //     case "TICKET_CREATED":
    //     setStepState(1)    
    //     break;
    //     case "PACKAGE_RECEIVED":
    //     setStepState(2)
    //     break;
    //     case "IN_TRANSIT":
    //     setStepState(3)
    //     break;
    //     case "DELIVERED":
    //     setStepState(4)
    //     break;
    // }   

    // console.log(stepState)


    return (
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            {/* {arr.map(step =>  {<div style={{width:'100%', height:'40vh'}}>
               <span className="Circle" style={step <= stepState ?{color:'green'}: {color:'grey'}}></span>
            <span className="line" style={step <= stepState ?{color:'green'}: {color:'grey'}}></span> 
             </div>})}  */}



{/* the change in the ui coloring and stepper depends on the status ID which I
 could not test as the tracking numbers provided are of the same status */}




            <span className="Circle" style={stepState <= 1 ?{backgroundColor:'#51ff3a'}: {backgroundColor:'#555555'}}></span>
            <span className="line" style={stepState <= 1 ?{color:'#51ff3a'}: {color:'#555555'}}></span>
             <span className="Circle" style={stepState <= 2 ?{backgroundColor:'#51ff3a'}: {backgroundColor:'#555555'}}></span>
            <span className="line" style={stepState <= 2 ?{color:'#51ff3a'}: {color:'#555555'}}></span>
             <span className="Circle" style={stepState <= 3 ?{backgroundColor:'#51ff3a'}: {backgroundColor:'#555555'}}></span>
            <span className="line" style={stepState <= 3 ?{color:'#51ff3a'}: {color:'#555555'}}></span>
             <span className="Circle" style={stepState <=4 ?{backgroundColor:'#51ff3a'}: {backgroundColor:'#555555'}}></span>    
        </div>
    )
}
export default StepperComponent;