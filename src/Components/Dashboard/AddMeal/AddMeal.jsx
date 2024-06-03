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
    <div className="p-10">

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>

          <div className="flex gap-5">
           <div>
           <input {...register('title')} name="title" type="text" placeholder="Title" />
           </div>
           <div>
           <select {...register('category')} name="category" className="select select-bordered w-full max-w-xs">
            <option >Select A Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
          </select>
           </div>

          </div>

          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddMeal