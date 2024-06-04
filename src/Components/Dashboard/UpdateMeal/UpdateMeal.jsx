/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"
import { useLoaderData } from 'react-router-dom';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const UpdateMeal = () => {
    const axiosPublic = useAxiosPublic()
    const loadData = useLoaderData()
    console.log(loadData)
    const {_id, title} = loadData;

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) =>{
            console.log(data)
            const imageFile = {image: data.image[0]}
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })

            if (res.data.success) {
                const mealsInfo = {
                  title: data.title,
                  category: data.category,
                  image: res.data.data.display_url,
                  ingradients: data.ingradients,
                  description: data.description,
                  price: parseFloat(data.price),
                  rating: data.rating,
                  post_time: data.post_time,
                  likes: data.likes,
                  riviews: data.riviews,
                  
                }
                  
                  // console.log(mealsInfo)
                  axiosPublic.put(`/mealsUpdate/${_id}`, mealsInfo)
                  .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount>0) {
                      Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Meal Updated SuccessFully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    }
                  })
          
                }
      }

  return (
    <div className="p-5">
    <div>
      <h1 className="text-3xl text-black font-bold mb-5 text-center">Update Meal</h1>
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
        <input {...register('post_time')} name="post_time" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="datetime-local" placeholder="Post Time" />
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


      </div>

      <div className="mt-8">
      <button className="w-full font-bold py-2 bg-blue-500 text-white">Update Meal</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default UpdateMeal