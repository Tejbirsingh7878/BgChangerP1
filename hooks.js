import { useState } from "react";


 export default function Counter(){
    const [counter,setCounter]=useState(0);  
    
    
    const addvalue=()=>{
        setCounter(counter+1);
    }
    const subValue=()=>{
        setCounter(counter-1);
    }

return (
    <div>
      <h2 className="bg-green-300">Counter UseState {counter} Example </h2>
       <button onClick={()=>addvalue()}>Add{counter}</button><br/>
       <button onClick={()=>subValue()}>sub</button>
    </div>
)
}
