import { useState ,useMemo} from "react"

export default function Memo(){
    const [dark ,setdark] = useState(false);
    const [number,setnumber] = useState(0);
    const [double ,setDouble] =useState (0);
    function handleclick (e){
        setnumber(parseInt(e.target.value));
        for (let i = 0;i<200; i++){}
        setDouble(number * 2);

    }

    return(
         <div className="h-screen w-full items-center justify-center flex-col flex" style={dark?
            {
                color:"white", 
              

            }:
            {
                color:"black",
             
              
            }
        }> 
            <h1 className="text-2xl">Never Give Up</h1>
            <p className="h-[30%] w-[40%]">Today is that day that you should try that you get exprence to learn something  to be the best . Today is that day that you should shininig not losted .Rahela aziz when you try you get result youcan make a shining futuer</p>
            <input className="border focus:outline-0 py-3 px-4 rounded-md"
             type="number" value={number} onChange={(e)=> setnumber(parseInt(e.target.value))} />
            <h1>{double}</h1>
            <button className="bg-green-600 py-4 px-5 rounded-md shadow-2xs shadow-white text-center" onClick={()=>setdark(!dark)}>Toggle theme</button>
      
        </div>
         
    )
}