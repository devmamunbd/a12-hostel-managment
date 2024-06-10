import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import { FaTrash } from "react-icons/fa"
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const AllRiview = () => {

  const axiosPublic = useAxiosPublic()

  const {data: items=[], refetch} =  useQuery({
    queryKey: ['items'],
    queryFn: async()=> {
      const res = await axiosPublic.get('/allRiviews')
      return res.data
    }
  })

  const handleDelete=item => {
    axiosPublic.delete(`/allDelete/${item._id}`)
    .then(res => {
      if (res.data.deletedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Riviews has been Deleted",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  // console.log(items)

  return (
    <div>
      <h1 className="text-3xl text-black font-semibold">All Riview</h1>
      <div className="divider"></div>
      <div>
      <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th> 
        <th>Title</th> 
        <th>Likes</th> 
        <th>Riviews Count</th> 
        <th>Action</th> 
        <th>View Meal</th> 
      </tr>
    </thead> 
    <tbody>
    {
      items?.map((item, index)=>   <tr key={item._id}>
      <th>{index+1}</th> 
      <td>{item?.title}</td> 
      <td>Quality Control Specialist</td> 
      <td>Littel, Schaden and Vandervort</td> 
      <td>
        <button onClick={()=> handleDelete(item)}
        className="btn bg-slate-200"
        >
          <FaTrash ></FaTrash>
        </button>
      </td> 

      <td><Link to={`/details/${item._id}`}
      className="btn bg-slate-200"
      >
      <FcViewDetails />
      </Link></td> 
    </tr>)
    }
  
    </tbody> 
  
  </table>
</div>
      </div>
    </div>
  )
}

export default AllRiview