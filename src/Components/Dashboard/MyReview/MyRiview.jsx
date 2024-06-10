import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth/useAuth"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyRiview = () => {

  const {user}= useAuth()
  const axiosPublic = useAxiosPublic()

  const {data: items=[], refetch} = useQuery({
    queryKey: ['items'],
    queryFn: async()=> {
      const res = await axiosPublic.get(`/specificRiview/${user?.email}`)
      return res.data
    }
  })
  // console.log(items)

  const handleDeleted=item=> {
    axiosPublic.delete(`/myDelete/${item._id}`)
    .then(res => {
      if (res.data.deletedCount > 0) {
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Riviews has been Deletd",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }


  return (
    <div>
     <h1 className="text-black text-3xl font-semibold"> MyRiview</h1>
      <div className="divider"></div>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Riviews</th>
        <th>Likes</th>
        <th>Riviews Count</th>
        <th>Action</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>

      {
        items.map((item, index)=> <tr key={item._id}>
        <th>{index+1}</th>
        <td>{item?.title}</td>
        <td>{item?.riview}</td>
        <td>{item?.likes}</td>
        <td>{item?.riviews}</td>
        <td><button
        onClick={()=> handleDeleted(item)}
         className="btn bg-slate-200">
          <FaTrash></FaTrash>
          </button></td>
        <td>
        <Link className="btn bg-slate-200">
        <FaEdit />

        </Link>

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

export default MyRiview