export default function Addpro(){
    return(
        <div className="h-screen w-full flex items-center justify-center">
            <div className="w-10/12 felx col-3 border rounded-md">
            <div className="col-sapn-1">
                <h1 className="absolute">Add New Product</h1>
                <img className="relative" src="/img/157073039.jpg" alt="" />
            </div>
            <div className="col-span-2">
                <form action="">
                    <input className="p-4 border rounded-md outline-0" type="text" placeholder="Enter The product name" />
                    <button className="py-3 px-5 bg-green-600 rounded-md text-white">Add</button>
                </form>
            </div>
            </div>
        </div>
    )
}