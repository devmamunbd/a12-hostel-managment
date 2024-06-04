import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import { FaRegEdit } from "react-icons/fa"
import Swal from "sweetalert2"
import { FcViewDetails } from "react-icons/fc"


const AllMeal = () => {

  const axiosPulic = useAxiosPublic()

  const {data: allMeals=[], refetch}= useQuery({
    queryKey: ['allMeals'],
    queryFn: async()=> {
      const res = await axiosPulic.get('/adminAllMeals')
      return res.data
    }
    
  })

  const handleDelet=meal=> {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPulic.delete(`/mealsDelete/${meal._id}`)
        .then(res => {
          if (res.data.deletedCount>0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your Meal has been deleted.",
              icon: "success"
            });
          }
        })
      }
    });
  }


//   title, likes, reviews, distributor name,
// update, delete, and view meal buttons.

  // console.log(allMeals)
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl text-black font-bold">All Meals</h1>
      </div>

      <div>
      <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>#</th> 
        <th>Title</th> 
        <th>Riviews</th> 
        <th>Admin Name</th> 
        <th>Update</th> 
        <th>Delete</th> 
        <th>View Meals</th>
      </tr>
    </thead> 
    <tbody>
      {
        allMeals.map((meal, index)=> <tr key={meal._id}>
        <th>{index+1}</th> 
        <td>{meal.title}</td> 
        <td>{meal.riviews}</td> 
        <td>{meal?.admin_name?.name}</td> 
        <td><Link><button className="btn bg-slate-200">
          <FaRegEdit  className="size-5"/>
        </button></Link></td> 

        <td><Link><button onClick={()=>handleDelet(meal)}
        className="btn bg-slate-200">
          <MdDelete  className="size-5"/>
        </button></Link></td> 
        <Link to={`/details/${meal._id}`}><button className="btn bg-slate-200"><td><FcViewDetails className="size-5"/>
</td></button></Link>
      </tr>)
      }
      
    </tbody> 
    
  </table>
</div>
      </div>

    </div>
  )
}

export default AllMeal