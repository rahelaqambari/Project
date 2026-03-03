export default function Form3(){
    return(
      <div className="w-full h-screen flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-bold">ADD NEW PRODUCT</h1>
         <form action="" className="flex flex-col gap-6 w-9/12 bg-stone-100">
      <div className="grid gap-1 grid-cols-2">
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product Name" />
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product slug" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product price" />
        <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" placeholder="Product stock" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <select name="category" id="">
        </select>
        
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="w-full flex flex-col gap-2">
          <input className=" border foucuse:outline-0 py-2 rounded-sm" type="text" name="" id="" placeholder="Product brand"  />
          <div className="flex justify-between gap-2 flex-wrap">
            <input className=" border foucuse:outline-0 py-2 rounded-sm" type="file" accept="image/*" />
            <input className=" border foucuse:outline-0 py-2 rounded-sm" type="file" accept="image/*" />
          </div>
        </div>
        <div>
          <textarea className="w-full h-full resize-none" name="description" id=""></textarea>
        </div>
      </div>
      <div>
<button className="border border-gray-400 py-2 px-6 text-center">
          Save
          </button>
      
      </div>
    </form>
</div>
    );
}