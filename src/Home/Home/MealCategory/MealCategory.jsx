import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MealCategory = () => {
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
      <h2>All Meals content</h2>
    </TabPanel>
    <TabPanel>
      <h2>Breakfast content</h2>
    </TabPanel>
    <TabPanel>
      <h2>Luanch content</h2>
    </TabPanel>
    <TabPanel>
      <h2>Dinner content</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default MealCategory