/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"



const AddMeal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{
    console.log(data)
  }

  // title, category, image,
  // ingredients, description, price, rating, post_time, likes, reviews,
  // admin_name, and_email.
  
  return (
    <div className="p-5">
        <div>
          <h1 className="text-3xl text-black font-bold mb-5 text-center">Add Meal</h1>
        </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">

          <div className="flex gap-5">
           <div>
           <input {...register('title')} name="title" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Title" />
           </div>
           <div>
           <select {...register('category')} name="category" className="select w-[400px] select-bordered ">
            <option >Select A Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
          </select>
           </div>

          </div>

          <div className="flex gap-5">
            <div>
            <input {...register('image')} name="image" type="file" className="file-input w-[400px]" />
            </div>
            <div>
            <input {...register('ingradients')} name="ingradients" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Ingradients" />
            </div>
          </div>

          <div className="flex gap-5">
            <div>
            <input {...register('price')} type="text" name="price" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" placeholder="Price"/>
            </div>
            <div>
            <input {...register('description')} name="description" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Description" />
            </div>
          </div>

          <div className="flex gap-5">
            <div>
            <input {...register('rating')} type="text" name="rating" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" placeholder="Rating"/>
            </div>
            <div>
            <input {...register('post_time')} name="post_time" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Description" />
            </div>
          </div>

          <div className="flex gap-5">
            <div>
            <input {...register('likes')} type="text" name="likes" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" placeholder="Likes"/>
            </div>
            <div>
            <input {...register('riviews')} name="riviews" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Riviews" />
            </div>
          </div>

          <div className="flex gap-5">
            <div>
            <input {...register('admin_name')} type="text" name="admin_name" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" placeholder="Admin Name"/>
            </div>
            <div>
            <input {...register('admin_email')} name="admin_email" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Admin Email" />
            </div>
          </div>


          </div>

          <div className="mt-8">
          <button className="w-full font-bold py-2 bg-blue-500 text-white">Add Meal</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMeal