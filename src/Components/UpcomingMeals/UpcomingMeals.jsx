import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic"
import ComingMeals from "../../Shared/ComingMeals/ComingMeals"

const UpcomingMeals = () => {
const axiosPublic = useAxiosPublic()

  const {data: meals=[]} = useQuery({
    queryKey: ['meals'],
    queryFn: async()=> {
      const res = await axiosPublic.get('/upcomingmeals')
      return res.data
    }
  })
  console.log(meals)


  return (
    <div className="mt-7 mb-16">
      <div>
        <h1 className="text-black text-4xl font-bold text-center">Up Coming Meals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
            meals.map(meal => <ComingMeals key={meal._id} meal={meal}></ComingMeals>)
          }
        </div>
      </div>
    </div>
  )
}

export default UpcomingMeals