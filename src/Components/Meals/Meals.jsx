/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useEffect } from "react"
import useAxiosPublic from './../../hooks/useAxiosPublic/useAxiosPublic';
import MealsCart from "../../Shared/MealsCart/MealsCart";
import useAuth from './../../hooks/useAuth/useAuth';



const Meals = () => {
  const {loading} = useAuth()
  const axiosPublic = useAxiosPublic()
  const [meals, setMeals] = useState([])
  const [allMeals, setAllMeals] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])
  const [priceRange, setPriceRange] = useState([])

    useEffect(()=> {
      const getData = async()=> {
        const {data} = await axiosPublic.get(`/meals`)
        setMeals(data)
      }
      getData()
    },[axiosPublic])
    // console.log(meals)


    //filter & search
    useEffect(()=> {
      const getData = async()=> {
        const {data} = await axiosPublic.get(`/all-meals?filter=${filter}&search=${search}&priceRange=${priceRange}`)
        setAllMeals(data)
      }
      getData()
    },[axiosPublic, filter, priceRange, search])


    const handleSearch =e=> {
      e.preventDefault()
      const text = e.target.search.value;
      setSearch(text)
      // console.log(text)
    }
    


  return (
    <div >




      <div className="flex justify-center gap-10 items-center">
       <form onSubmit={handleSearch}>
        <div className="flex gap-3">
       <input name="search" className="bg-gray-50 rounded-lg p-2 outline-none border-[1px] w-64 border-gray-400" type="text" id="search" placeholder="Enter Meals Title"/> 
        <button className="px-10 rounded-lg py-2 bg-blue-500 text-white font-semibold">Search</button>
        </div>
       </form>
        
        <select 
        onChange={e => setFilter(e.target.value)}
        value={filter}
        name="category"
        id="category"
        className="select w-full outline-none max-w-xs">
          <option value="">Filter By Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
         
        </select>


        <select 
        onChange={e => setPriceRange(e.target.value)}
        value={priceRange}
        name="price"
        id="price"
        className="select w-full outline-none max-w-xs">
          <option value="">Filter By Price Range</option>
          <option value="$5 - $50">$5 - $50</option>
          <option value="$51 - $150">$51 - $150</option>
          <option value="$151 - $300">$151 - $300</option>
         
        </select>
          
       
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
     {
        allMeals.map(item => <MealsCart key={item._id} item={item}></MealsCart>)
      }
     </div>
    </div>
  )
}

export default Meals