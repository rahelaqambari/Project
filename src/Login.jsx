export default function Login (){
    return(
        <div className="h-screen w-full flex items-center justify-center">
              <div className="h-[70%] w-[50%] bg-gray-100 shadow-2xl items-center flex gap-8 flex-col  justify-center"> 
                <h1 className="text-4xl font-bold">Login Page</h1>
        <input className="h-16 w-[90vh]  border border-stone-200 rounded-2xl" placeholder="  Enter your name" />
        <input className="h-16 w-[90vh]  border border-stone-200 rounded-2xl" placeholder="Enter your email address" />
        <input className="h-16 w-[90vh]  border border-stone-200 rounded-2xl" placeholder="Enter your password" />
        <button className="bg-green-400 py-3 rounded-sm sc px-6">Login</button>
        <h1 className="font-light line-through">Forget password</h1>
      </div>
        </div>
    )
}