import React from 'react'
import ExploreCard from './exploreCards';
import { restaurants } from '../../../data/restaurants'
import './explore.css';
const ExploreSection = ({list, collectionName}) => {
  // console.log(restaurants);
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
      {list.map((restaurants)=>{
        return <ExploreCard restaurant={restaurants}/>
      })}
      </div>
    </div>
  )
}

export default ExploreSection