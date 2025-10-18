 function Cart (){
    return(
        <div className="h-screen w-full grid grid-cols-3 gap-4 m-4 items-center justify-center bg-[url(/img/1-1.jpeg)]">
            <div className="h-[70vh] w-[50vh] border rounded-md relative animate-spin hover:animate-pulse ">
                <img className="h-full w-full rounded-md" src="/img/1-1.jpeg" alt="" />
            </div>
            <div className="h-[70vh] w-[50vh] border rounded-md animate-pulse hover:animate-ping">
                <img className="h-full w-full rounded-md" src="/img/1-2.jpeg" alt="" />
            </div>
            <div className="h-[70vh] w-[50vh] border rounded-md animate-bounce hover:animate-spin ">
                <img className="h-full w-full rounded-md" src="/img/1-3.jpeg" alt="" />
            </div>
            
         
        </div>
    )
}
export default Cart 