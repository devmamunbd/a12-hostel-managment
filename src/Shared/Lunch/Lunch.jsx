/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Lunch = ({item}) => {
  return (
    <div>
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
<img src={item.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
<div className="mt-6 mb-2">
    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.title}</span>
    <div className="flex justify-between">
    <h2 className="text-xl font-semibold tracking-wide">Price: {item.price}</h2>
<p className="text-black">Rating: {item.rating}</p>
    </div>
</div>
<Link to={`/details/${item._id}`}><button className="w-full bg-blue-500 text-white font-semibold py-2">View Details</button></Link>
</div>
</div>
  )
}

export default Lunch