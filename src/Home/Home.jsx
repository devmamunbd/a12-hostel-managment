import Banner from "./Home/Banner/Banner"
import MealCategory from "./Home/MealCategory/MealCategory"

const Home = () => {
  return (
    <div className="py-10">

       <div>
        <Banner></Banner>
       </div>

        <div className="py-10">
            <h1 className="text-center text-black font-bold text-2xl">Meals By Category</h1>
            <MealCategory></MealCategory>
        </div>

    </div>
  )
}

export default Home