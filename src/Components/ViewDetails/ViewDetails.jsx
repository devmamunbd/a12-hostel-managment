/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";




const ViewDetails = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [count, setCount] = useState(0)
    const [riviewCount, setRiviewCount] = useState(0)
    const loadData = useLoaderData()
    // console.log(loadData)
    const {_id, title, category, image,ingradients, description,
         price, rating, post_time, likes, riviews,  } = loadData;
        
         const handleLike=async()=> {
            const sum = count + 1;
            const like= setCount(sum)
        //    const res = await axiosPublic.put('/likes', like)
        //     .then(res => {
        //         console.log(res.data)
        //         setCount(res.data.count)
        //     })
        }
    
       const handleReivie=()=> {
        const sum = riviewCount +1
        setRiviewCount(sum)
       }


       const handleRiviewForm=event=> {
         event.preventDefault()
         const form = event.target;
         const riview = form.riview.value;
         console.log(riview)

       }

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
                <p className=""><span className="text-black font-semibold">likes:</span> {likes}</p>
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
                <button onClick={()=>handleLike()} className="bg-green-500 px-10 py-3 rounded-md text-white font-bold">Like: {likes}</button>
                <button className="bg-green-500 px-10 py-3 rounded-md text-white font-bold">Meal Request</button>
            </div>
			</div>
		</a>
		
	
	</div>
</section>
        
        <div>
            <div className="divider"></div>
            <h1 className="text-black font-bold text-4xl text-center">Review Section</h1>
            <div className="divider"></div>
        </div>
        <div>
            <form onSubmit={handleRiviewForm}>
              <div>
              <div className="flex justify-between">
               <div className="">
                <textarea className="p-2 w-[900px] outline-none border-[1px] border-gray-400" name="riview" id="" cols="" rows="2" placeholder="Riviews"></textarea>
                </div>
                <div>
               <h1 className="bg-green-500 px-16 border-[1px] border-gray-400 py-2 text-white font-semibold">Riview Count: {riviewCount}</h1>
                </div>
               </div>
               <div className="mt-4">
                <button className="w-full py-2 bg-green-500 font-bold text-white">Riview Added</button>
               </div>
              </div>
            </form>
        </div>

    </div>
  )
}

export default ViewDetails