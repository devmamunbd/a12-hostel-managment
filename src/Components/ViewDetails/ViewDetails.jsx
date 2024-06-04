/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth";

const ViewDetails = () => {
    const {user} = useAuth()
    const [count, setCount] = useState(0)
    const loadData = useLoaderData()
    // console.log(loadData)
    const {_id, title, category, image,ingradients, description,
         price, rating, post_time, likes, riviews,  } = loadData;
        
         const handleLike=()=> {
            const sum = count + 1;
            setCount(sum)
        }
    
    // if (user) {
    //     handleLike()
    // }



  return (
    <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl"><span className="text-black font-semibold">Title: </span> {title}</h3>
				<span className="text-xs dark:text-gray-600"><span className="text-black font-bold">Post Time:</span> {new Date(post_time).toLocaleString()}</span>
				<p><span className="text-black font-bold">Description:</span> {description}</p>
            <div className="flex gap-3 flex-wrap">
                <p className=""><span className="text-black font-semibold">Ingredients:</span> {ingradients}</p>
                {/* {
                    ingredients.map(item => <p className="bg-green-500 px-4 py-1 rounded-full text-white" key={item}>
                       {item}
                    </p>)
                } */}
            </div>
            <div className="flex justify-between">
                <p><span className="text-black font-semibold">Price:</span> {price}</p>
                <p><span className="text-black font-semibold">Rating:</span> {rating}</p>
            </div>
            <div>
                <p><span className="text-black font-semibold">Review:</span> {riviews}</p>
            </div>
            <div className="flex justify-between">
                <button onClick={()=>handleLike()} className="bg-green-500 px-10 py-3 rounded-md text-white font-bold">Like: {count}</button>
                <button className="bg-green-500 px-10 py-3 rounded-md text-white font-bold">Meal Request</button>
            </div>
			</div>
		</a>
		
	
	</div>
</section>
        
        <div>
            <h1 className="text-black font-bold text-4xl text-center">Review Section</h1>
        </div>

    </div>
  )
}

export default ViewDetails