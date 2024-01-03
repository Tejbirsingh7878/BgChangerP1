 import {useState} from "react";

export default function BgChanger(){
    const [color, setColor]=useState("black");// default value 


return (
<div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
<div className="fixed flex flex-wrap justify-center top-12 inset-x-0  px-2">
<div className=" flex flex-wrap justify-center bg-white gap-2 px-3 py-2 rounded-3xl">
    <button onClick={()=>setColor("violet")}// call back function as onclick method need function not return so we can not write like onClick={setColor("violet")} 
    className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"violet"}}>violet</button>
    <button 
    onClick={()=>setColor("blue")}
     className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}}>blue</button>
    <button onClick={()=>setColor("green")}
    className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}}>green</button>
    <button onClick={()=>setColor("orange")}
     className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"orange"}}>orange</button>
    <button onClick={()=>setColor("white")}
    className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor:"#F1F3F4"}}>white</button>
    <button onClick={()=>setColor("red")}
    className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}>Red</button>



</div>

</div>







</div>

)

} 