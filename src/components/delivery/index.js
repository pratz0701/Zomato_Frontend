import React from 'react';
import ExploreSection from '../common/explore';
import Filters from '../common/filters';
import DeliveryCollections from './delivery collection';
import "./delivery.css";
import TopBrands from './topbrands';
import Hungry from '../common/hungry/index'


const deliveryFilters=[
  {
    "id":1,
    "icon": <i className='fi fi-rr-settings-sl"id"ers absolute-center'></i>,
    "title": "Filters",
    
  },

  {
    "id":2,
    "title": "Rating: 4.0+",
    
  },

  {
    "id":3,
    "title": "Safe and Hygienic",
    
  },

  {
    "id":4,
    "title": "Pure Veg",
    
  },

  {
    "id":5,
    "icon": <i className='fi fi-rr-apps-sort absolute-center'></i>,
    "title": "Delivery Time",
    
  },

  {
    "id":6,
    "icon": <i className=''></i>,
    "title": "Great Offers",
  },
];

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList = {deliveryFilters} />
      </div>
      <div>
        {/* <Wecareaboutyou /> */}
        <Hungry/>
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection/>
      </div>

    </div>
  );
};

export default Delivery