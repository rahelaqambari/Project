export default function Homework(){
    return(
        <div className="h-fit w-full flex flex-col items-center justify-center gap-5">
            <div className="h-10 w-10 border-2 border-t-0 border-l-0 rounded-full animate-spin"></div>
            <div className="h-20 w-fit flex  ">
                <div className="h-20 w-24">
                    <div className="h-20 w-20 rounded-full border-b-4 border-green-500 flex justify-center gap-6">
                         <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

                    </div>
                </div>
                 <div className="h-full w-96 text-center rounded-lg bg-green-500">
                    <h1 className="text-white text-2xl ">تا اینجا ذخیره شد متن میتونید بعدا مطالعه کنید</h1>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum ipsa ullam? At modi quam expedita? Rem magni voluptate voluptatum, fugiat incidunt aliquid cum laboriosam aperiam sint voluptas dolorum molestiae.</p>
        </div>
    )
}