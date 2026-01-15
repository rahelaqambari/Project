function Sample2() {
  return (
    <div className="w-full min-h-screen bg-linear-150 from-gray-400 to-gray-900 flex flex-col items-center ">
        <div className="p-12 bg-white w-7/12 mt-12 rounded-2xl border-2">
        <h1 className="text-3xl font-bold">Learning Prisama</h1>
        <p className="text-right font-medium">{new Date().toDateString()}</p>
        </div>
        <div className="p-12 bg-white w-7/12 mt-12 rounded-2xl border-2">
        <h1 className="text-3xl font-bold">Doing Homework</h1>
        <p className="text-right font-medium">{new Date().toDateString()}</p>
        </div>
        <div className="p-12 bg-white w-7/12 mt-12 rounded-2xl border-2">
        <h1 className="text-3xl font-bold">Cheaking Emails</h1>
        <p className="text-right font-medium">{new Date().toDateString()}</p>
        </div>
    </div>
  )
}

export default Sample2
