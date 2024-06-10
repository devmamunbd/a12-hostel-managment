/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";




const ViewDetails = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const loadData = useLoaderData()
    // console.log(loadData)
    const {_id, title, category, image,ingradients, description,
         price, rating, post_time, likes, riviews,  riviewCount} = loadData;
        
         const handleLike=async(id, likes)=> {
            // console.log(id, likes)
            axiosPublic.patch(`/likes/${id}`, {likes})
            .then(res => {
                console.log(res.data)
            })
        }
    
        // const handleRiviewCount=(id,riviewCount)=> {
        //     axiosPublic.patch(`/riviewCount/${id}`, {riviewCount})
        //     .then(res => {
        //         console.log(res.data)
        //     })
        // }
     


       const handleRiviewForm=event=> {
         event.preventDefault()
         const form = event.target;
         const riview = form.riview.value;

         const reviewsInfo = {
            _id,
             title: title,
             riview: riview,
             name: user?.displayName,
             email: user?.email
            
            }
         console.log(reviewsInfo)

         axiosPublic.post('/riviews', reviewsInfo)
         .then(res => {
             if (res?.data?.insertedId) {
                // handleRiviewCount()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Riviews has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })

       }


       const handlemealrequets=()=> {
            const mealRequets = {
                title: title,
                name: user?.displayName,
                email: user?.email,
                likes: parseInt(likes),
                riview: riviews,
                status: 'Pending'

            }

            axiosPublic.post('/mealRequests', mealRequets)
            .then(res => {
                // console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Meal Request Send",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
       }

  return (
    <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto ">
		<a rel="noopener noreferrer" href="#" className="block gap-3 lg:grid lg:grid-cols-12 dark:bg-gray-50">
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
                <p><span className="text-black font-semibold">Price:</span> ${price}</p>
                <p><span className="text-black font-semibold">Rating:</span> {rating}</p>
            </div>
            <div>
                <p><span className="text-black font-semibold">Review:</span> {riviews}</p>
            </div>
            <div className="flex justify-between">
               <div>
               {
                    user ? 
                <button onClick={()=>handleLike(_id, likes)} className="bg-green-500 px-10 py-3 rounded-md text-white font-bold">Like</button>
                    :
                <button className="bg-green-500 cursor-not-allowed px-10 py-3 rounded-md text-white font-bold">Like: </button>

                }
               </div>
               <div>
                {
                    user ?  <button onClick={()=> handlemealrequets()}
                    className="bg-green-500 px-10 py-3 rounded-md text-white font-bold">Meal Request</button>
                    :  <button 
                    className="bg-green-500 px-10 py-3 rounded-md cursor-not-allowed text-white font-bold">Meal Request</button>
                }
               </div>
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
              <div className="flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center">
               <div className="">
                <textarea className="p-2 w-[300px] md:w-[820px] lg:w-[900px] outline-none border-[1px] border-gray-400" name="riview" id="" cols="" rows="2" placeholder="Riviews"></textarea>
                </div>
                <div>
               <h1 className="bg-green-500 px-16 border-[1px] sm:w-[300px] md:w-full border-gray-400 py-2 text-white font-semibold">Riview Count: {riviewCount}
                  
                 </h1>
                </div>
               </div>
               <div className="mt-4 flex justify-center ">
                <button
                //  onClick={()=>handleRiviewCount(_id, riviewCount)}
                  className="w-[300px] md:w-[820px] lg:w-full py-2 bg-green-500 font-bold text-white">Riview Added</button>
               </div>
              </div>
            </form>
        </div>

    </div>
  )
}

export default ViewDetails