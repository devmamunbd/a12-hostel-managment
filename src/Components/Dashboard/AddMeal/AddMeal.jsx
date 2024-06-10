/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import useAxiosSecure from './../../../hooks/useAxiosSecure/useAxiosSecure';
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart/useCart";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddMeal = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const {data: item=[]}= useQuery({
    queryKey: ['item'],
    queryFn: async()=> {
      const res = await axiosSecure.get(`/adminUsers/${user?.email}`)
      return res.data
    }
    
  })
  const [name, email] = item;
  // console.log(name,email)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{

    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    console.log(res.data)

    if (res.data.success) {
      const mealsInfo = {
        title: data.title,
        category: data.category,
        image: res.data.data.display_url,
        ingradients: data.ingradients,
        description: data.description,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        post_time: data.post_time,
        likes: parseInt(data.likes),
        riviews: data.riviews,
        riviewCount: parseInt(0),
        admin_name: name,
        admin_email: email
      }
        
        // console.log(mealsInfo)
        axiosSecure.post('/allmeals', mealsInfo)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            reset()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Meal Added SuccessFully",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

      }


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

          {/* <div className="flex gap-5">
            <div>
            <input {...register('admin_name')} type="text" name="admin_name" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" placeholder="Admin Name"/>
            </div>
            <div>
            <input {...register('admin_email')} name="admin_email" className="p-2 w-[400px] outline-none border-[1px] border-slate-500" type="text" placeholder="Admin Email" />
            </div>
          </div> */}


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