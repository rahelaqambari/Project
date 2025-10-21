export default function About(){
    return(
        <div className="h-screen w-full flex flex-col items-center">
            <div className="h-32 flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">Computer Is One of My Favorite</h1>
                <p className="w-[60%] text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet facere quis inventore earum autem explicabo quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum earum ex at a, dicta </p>
            </div>
           <div className="flex items-center justify-between gap-16">
            <div className="h-fit w-full relative flex flex-col items-center justify-center">
             <div className="h-fit w-full relative flex items-center justify-center">
                <img className="h-[50vh] w-[60vh] " src="/img/pexels-photo-2047905.webp" alt="" />
            </div>
            <div className="h-24 w-[60vh] absolute bottom-0 left-0 bg-stone-100">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque excepturi dolor.</p>
            </div>
           </div>
           <div className="h-fit w-full relative">
             <div className="h-fit w-full relative">
                <img className="h-[50vh] w-[60vh] " src="/img/pexels-photo-1420709.webp" alt="" />
            </div>
            <div className="h-24 w-[60vh] absolute bottom-0 left-0 bg-stone-100">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque excepturi dolor.</p>
            </div>
           </div>
           <div className="h-fit w-full relative">
             <div className="h-fit w-full relative">
                <img className="h-[50vh] w-[60vh] " src="/img/pexels-photo-585752.jpeg" alt="" />
            </div>
            <div className="h-24 w-[60vh] absolute bottom-0 left-0 bg-stone-100">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque excepturi dolor.</p>
            </div>
           </div>
           </div>
        </div>
    )
}