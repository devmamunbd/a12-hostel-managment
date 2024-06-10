/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import Swal from "sweetalert2"
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure"
import useAuth from "../../../hooks/useAuth/useAuth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpComingMeals = () => {
  const {user}= useAuth()
  const axiosSecure = useAxiosSecure()
  const axiosPublic = useAxiosPublic()
  const {data: upMeal} = useQuery({
    queryKey: ['upMeal'],
    queryFn: async ()=> {
      const res = await axiosPublic.get('/upCoimngMeals')
      return res.data
    }
  })


  const upComing = upMeal?.sort((a,b)=> (b.likes) - (a.likes))
 
  
const handlePublishButton=(meal)=> {
// console.log(food)
  axiosPublic.post('/upAddMealCollection', meal)
  .then(res => {
    console.log(res.data)
    if(res.data.insertedId){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Up Coming Meal Added In Meal Collection",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm()

const {data: item=[]}= useQuery({
  queryKey: ['item'],
  queryFn: async()=> {
    const res = await axiosSecure.get(`/adminUsers/${user?.email}`)
    return res.data
  }
  
})
const [name, email] = item;

const onSubmit = async (data) =>{
  // console.log(data)

  const imageFile ={image: data.image[0]}
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
      rating: parseFloat(data.rating),
      post_time: data.post_time,
      likes: parseInt(data.likes),
      riviews: data.riviews,
      admin_name: name,
      admin_email: email
    } 
    axiosPublic.post('/uc', mealsInfo)
    .then(res => {
      console.log(res.data)
      if (res.data.insertedId) {
       toast.success("Up Coming Meal Added")
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   title: "Meal Added SuccessFully",
        //   showConfirmButton: false,
        //   timer: 1500
        // });
      }
    })
  
  }
}

  return (
    <div>
      <div>
       <div className="flex justify-between items-center">
       <h1 className="text-3xl text-black font-bold">Up Coming Meals</h1>
     {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-lg text-black font-semibold" onClick={()=>document.getElementById('my_modal_4').showModal()}>Up Coming Meal</button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg text-center">Up Coming Meal Added!</h3>
            <div className="modal-action">

              <form 
              onSubmit={handleSubmit(onSubmit)}
              method="dialog">
                
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
                  <button className="w-full font-bold py-2 bg-blue-500 text-white">Up Coming Meal Added</button>
                  </div>

                  <button className="btn">Close</button>

              
              </form>
            </div>
          </div>
        </dialog>
       </div>
        <div className="divider"></div>
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th> 
        <th>Title</th> 
        <th>Category</th> 
        <th>Desciption</th> 
        <th>Post Time</th> 
        <th>Likes</th> 
        <th>Price</th> 
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
     {
      upComing?.map((meal, index)=>  <tr key={meal._id}>
      <th>{index+1}</th> 
      <td>{meal?.title}</td> 
      <td>{meal?.category}</td> 
      <td>{meal?.description}</td> 
      <td>{new Date(meal?.post_time).toLocaleString()}</td> 
      <td>{meal?.likes}</td> 
      <td>${meal?.price}</td> 
      <td><button
      onClick={()=>handlePublishButton(meal)}
       className="btn btn-md">Pulish</button></td>
    </tr>)
     }
     
    </tbody> 
    
  </table>
</div>
<ToastContainer />
      </div>
    </div>
  )
}

export default UpComingMeals