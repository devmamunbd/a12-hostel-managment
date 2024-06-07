/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom"

const CheckOut = () => {
    const loadData = useLoaderData()
    // console.log(loadData)
    const {package: pack, image, price,description, breakfast, dinner, lunch, foodQuality, featuresOne, featuresTwo, featuresThree, featuresFour, featuresFive} = loadData

	// const {package: packs} = useParams()

  return (
    <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="sm:text-2xl font-semibold lg:text-4xl">Package: {pack}</h3>
				<h3 className="sm:text-2xl font-semibold md:text-2xl">Price: ${price}</h3>
				<p className="text-xl text-black">{description}</p>
				<div className="flex gap-2 items-center flex-wrap">
					<h1 className="text-black font-semibold text-lg">Feature:</h1>
					<p className="bg-green-500 text-white px-3 py-1 rounded-full"> 
					{featuresOne}
					</p>
					<p className="bg-green-500 text-white px-3 py-1 rounded-full"> 
					{featuresTwo}
					</p>
					<p className="bg-green-500 text-white px-3 py-1 rounded-full"> 
					{featuresThree}
					</p>
					<p className="bg-green-500 text-white px-3 py-1 rounded-full"> 
					{featuresFour}
					</p>
					<p className="bg-green-500 text-white px-3 py-1 rounded-full"> 
					{featuresFive}
					</p>
				</div>
				<div>
					<h2 className="text-xl"><span className="text-black font-semibold ">Food Quality: </span>{foodQuality}</h2>
				</div>
				<div>
					<h1><span className="text-black font-semibold">BreakFast:</span> {breakfast}</h1>
					<h1><span className="text-black font-semibold">Dinner:</span> {dinner}</h1>
					<h1><span className="text-black font-semibold">Lunch:</span> {lunch}</h1>
				</div>
			</div>
			
		</a>
                <div >
                   <Link  to={`/payment/${pack}`} >
                   <button className="bg-green-500 py-2 text-white w-full font-semibold" >Purchase Now</button>
                   </Link>
 {/* <Link to={packs}>
	Price Is Here
			</Link> */}
                </div>
		
	</div>
</section>
{/* <CheckOutForm price={price}></CheckOutForm> */}
    </div>
  )
}

export default CheckOut