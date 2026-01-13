import { useRef } from "react";

export default function Ref(){
    const text = useRef("");
    function click (){
        text.current.textContent = "something is changed";
    };
    return(
    <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 ref={text}> Defalut text</h1>
        <button className="bg-green-700 p-3 text-white" onClick={click}> Change the text</button>
    </div>
)
};
