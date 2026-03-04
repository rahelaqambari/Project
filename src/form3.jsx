export default function Form3(){
    return(
      <div className="w-full h-screen flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-bold">ADD NEW PRODUCT</h1>
         <form action="" className="flex flex-col gap-6 w-10/12 bg-stone-100 p-6 rounded-md">
      <div className="grid gap-1 grid-cols-2">
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product Name" />
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product slug" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product price" />
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product stock" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <select className=" border foucuse:outline-0 py-2 rounded-sm" name="category" id="">
        </select>
              <select className=" border foucuse:outline-0 py-2 rounded-sm" name="category" id="">
                Cousmic Items
        </select>
        
        
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="w-full flex flex-col gap-2">
          <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" name="" id="" placeholder="Product brand"  />
          <div className="flex justify-between gap-2 flex-wrap">
            <input className=" border foucuse:outline-0 py-2 rounded-sm " type="file" accept="image/*" />
            <input className=" border foucuse:outline-0 py-2 rounded-sm " type="file" accept="image/*" />
          </div>
        </div>
        <div>
          <textarea placeholder="Description" className="px-2 w-full h-full resize-none border foucuse:outline-0 py-2 rounded-sm" name="description" id=""></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center">
<button className="border border-gray-400 py-2 px-6 text-center rounded-sm">
          Save
          </button>
      
      </div>
    </form>
</div>
    );
}