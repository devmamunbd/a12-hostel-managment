import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCart from '../../../hooks/useCart/useCart';
import AllMeals from '../../../Shared/AllMeals/AllMeals';
import BreakFast from './../../../Shared/BreakFast/BreakFast';
import Lunch from './../../../Shared/Lunch/Lunch';
import Dinner from './../../../Shared/Dinner/Dinner';


const MealCategory = () => {

  const [carts] = useCart()
  // console.log(carts)

  const breakfast = carts.filter(item => item.category === "Breakfast")
  const lunch = carts.filter(item => item.category === "Lunch")
  const dinner = carts.filter(item => item.category === "Dinner")

  return (
    <div>
        <Tabs>
    <TabList>
      <Tab>All Meals</Tab>
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
    </TabList>

    <TabPanel>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        carts?.map(item => 
          <AllMeals key={item._id} item={item}></AllMeals>
        )
      }
      </div>
    </TabPanel>
    <TabPanel>
     <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        breakfast?.map(item => 
          <BreakFast key={item._id} item={item}></BreakFast>
        )
      }
      </div>
    </TabPanel>
    <TabPanel>
       <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        lunch?.map(item => 
          <Lunch key={item._id} item={item}></Lunch>
        )
      }
      </div>
    </TabPanel>
    <TabPanel>
       <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        dinner?.map(item => 
          <Dinner key={item._id} item={item}></Dinner>
        )
      }
      </div>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default MealCategory