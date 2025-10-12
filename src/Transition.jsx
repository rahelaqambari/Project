import { useState, useTransition } from "react"

export default function Transition (){
    const [value ,setvalue] =useState ("");
    const [loding ,starttransition] = useTransition();
    const LIST_SIZE = 2000;
    const [list ,setList] =useState ([]);
    function handleClick (event){
        setvalue(event.target.value);
        const list = [];
        starttransition(()=>{
             for (let r = 0; r< LIST_SIZE; r++){
            list.push(value);
        }
        setList(list);
        })
       
    }
    return(
        <div className="h-screen w-full  text-center ">
            <input className="border py-2 px-6 rounded-md focus:outline-0 " type="text" value={value} onChange={(e)=> handleClick(e)} />
            { loding?" Loading .. ":list.map((li ,index)=>(
                <div key ={index}>{li}</div>
            ))}
        </div>
    )
}