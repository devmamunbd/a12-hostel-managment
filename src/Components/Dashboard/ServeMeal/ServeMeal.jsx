import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";

const ServeMeal = () => {
  const [search, setSearch] = useState('')
  const axiosPublic = useAxiosPublic()
  const {data: items=[], refetch} = useQuery({
    queryKey: ['items'],
    queryFn: async()=> {
      const res = await axiosPublic.get(`serveMeal?search=${search}`)
      return res.data
    }
  })

 const handleStatusButton = (id, prevStatus, status) => {
  // console.log(id,prevStatus, status)
  if (prevStatus === status) return console.log('sorry') 
  axiosPublic.patch(`/updateMeal/${id}`, {status})
  .then(res => {
    console.log(res.data)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Requests Changed",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })

 }


 const handleSearchButton =event=> {
  event.preventDefault()
  const form = event.target
  const search = form.search.value
  setSearch(search)
  // console.log(search)
 }

  return (
    <div>
      <div>
        <h1 className="text-black font-semibold text-3xl">Serve Meal</h1>
      </div>
    <div className="divider"></div>

      <div>

        <div>
          <form onSubmit={handleSearchButton}>
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 p-5">
          <div>
            <input className="p-2 rounded-md border-[1px] border-slate-300 outline-none" type="search" id="" name="search" placeholder="Saerch" />
          </div>
          <div>
            <button className="px-10 py-2 bg-blue-500 text-white rounded-md">Search</button>
          </div>
        </div>
          </form>
        </div>
       
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Titel</th>
        <th>Status</th>
        <th>Serve</th>
      </tr>
    </thead>
    <tbody>

     {
      items?.map((item, index)=>   
      <tr key={item._id} className="bg-base-200">
      <th>{index+1}</th>
      <td>{item?.name}</td>
      <td>{item?.email}</td>
      <td>{item?.title}</td>
      <td>
        <p className="bg-orange-500 p-2 text-white rounded-md">{item?.status}</p>
      </td>
      <td>
        <button onClick={()=> handleStatusButton(item._id, item.status, "Serving")}
        className="btn bg-slate-200"
        >
          Serve
        </button>
      </td>
    </tr>)
     }
      
    </tbody>
  </table>
</div>
      </div>

    </div>
  )
}

export default ServeMeal