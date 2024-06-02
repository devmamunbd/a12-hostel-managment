import { useState } from "react"
import { useEffect } from "react"
import useAxiosPublic from './../../hooks/useAxiosPublic/useAxiosPublic';
import MealsCart from "../../Shared/MealsCart/MealsCart";



const Meals = () => {
  const axiosPublic = useAxiosPublic()
  const [meals, setMeals] = useState([])

    useEffect(()=> {
      const getData = async()=> {
        const {data} = await axiosPublic.get(`/meals`)
        setMeals(data)
      }
      getData()
    },[axiosPublic])
    // console.log(meals)

  return (
    <div >


     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {
        meals.map(item => <MealsCart key={item._id} item={item}></MealsCart>)
      }
     </div>
    </div>
  )
}

export default Meals