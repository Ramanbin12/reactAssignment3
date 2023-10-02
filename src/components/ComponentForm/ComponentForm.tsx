import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardComponent from "../CheckoutComponent/SubComponents/CardComponent"
import OrderSummary from '../CheckoutComponent/SubComponents/OrderSummary';
import ComponentDetails from '../ComponentInformation/SubComponents/ComponentDetails';
import { OtherProductsComponent } from '../DetailedBrandComponent/SubComponents';
import {ConfirmationComponent, PaymentComponent} from "../index"
const ComponentForm = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
  return (
    <div className='space-y-5 m-5'>
        <TabContext value={value}>
            <div className='flex  justify-center'>
          <TabList style={{display:'flex', gap:'20px'}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="CARD(1)" value="1" />
            <Tab label="CUSTOMER INFO" value="2" />
            <Tab label="SHIPPING & PAYMENT" value="3" />
            <Tab label="PRODUCT CONFIRMATION" value="4" />

          </TabList>
          </div>
          <div className='flex w-full flex-wrap md:flex-nowrap gap-10 justify-between'>
            <div className=' w-full lg:w-2/3  lg:p-5 '>
          <TabPanel  value="1"><CardComponent/></TabPanel>
        <TabPanel value="2"><ComponentDetails/></TabPanel>
        <TabPanel value="3"><PaymentComponent/> </TabPanel>
        <TabPanel value="4"><ConfirmationComponent/></TabPanel>
        </div>
      {/* <CardComponent/> */}
      <OrderSummary/>
    </div>
    <OtherProductsComponent/>
       

      </TabContext>
    {/* <p className='text-2xl font-lato font-medium text-black m-3'>Card</p> */}
    {/* <div className='flex w-full flex-wrap md:flex-nowrap gap-10 justify-between'>
      <CardComponent/>
      <OrderSummary/>
    </div>
    <OtherProductsComponent/> */}
    

    </div>
  )
}

export default ComponentForm
