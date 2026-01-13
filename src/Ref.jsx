import { useRef } from "react";

export default function Ref(){
    const text = useRef("");
    function click (){
        text.current.textContent = "What are you doing now. I thank taht you are busy with your work, Yeah I am ture";
    };
    return(
    <div className="h-screen w-full flex flex-col items-center justify-center gap-12">
        <input type="text" value={click} />
        <h1 className="text-2xl " ref={text}>Hey, How are you </h1>
        <button className="bg-green-700 p-3 rounded-md text-white" onClick={click}> Change the text</button>
    </div>
)
};
