export default function Form3 (){
    return(
         <form action={action} className="flex flex-col gap-2">
      <div className="grid gap-1 grid-cols-2">
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product slug" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <input type="text" placeholder="Product price" />
        <input type="text" placeholder="Product stock" />
      </div>
      <div className="grid gap-1 grid-cols-2">
        <select name="category" id="">
            <input type="text" placeholder="" />
        </select>
        
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="w-full flex flex-col gap-2">
          <Input name="brand" type="text" placeholder="Product brand" />
          <div className="flex justify-between gap-2 flex-wrap">
            <input type="file" accept="image/*" />
            <input type="file" accept="image/*" />
          </div>
        </div>
        <div>
          <textarea className="w-full h-full resize-none" name="description" id=""></textarea>
        </div>
      </div>
      <div>
<button>
          Save
          </button>
      
      </div>
      {data && !data.success && <div>{data.message}</div>}
    </form>

    );
}