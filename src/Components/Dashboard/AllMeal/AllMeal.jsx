import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import { Link } from "react-router-dom"


const AllMeal = () => {

  const axiosPulic = useAxiosPublic()

  const {data: allMeals=[], refetch}= useQuery({
    queryKey: ['allMeals'],
    queryFn: async()=> {
      const res = await axiosPulic.get('/adminAllMeals')
      return res.data
    }
    
  })

//   title, likes, reviews, distributor name,
// update, delete, and view meal buttons.

  console.log(allMeals)
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
        <td>{meal.admin_name.name}</td> 
        <td>Update</td> 
        <td>Delete</td> 
        <Link><button><td>Blue</td></button></Link>
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