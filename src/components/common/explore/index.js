import React ,{useState,useEffect} from 'react'
import ExploreCard from './exploreCards/index';
import "./explore.css"


const ExploreSection = (collectionName) => {

const [restaurants,setRestaurants]= useState([]);

  useEffect(()=>{  
    fetchAPIdata();
  },[]);

 
const fetchAPIdata =  ()=>{
  try{
    fetch('http://3.111.196.246/main/all_res/')
    .then(res=>res.json())
    .then(data=>{
      setRestaurants(data.response);
      console.log("yha hu"+restaurants)
    })
    
    
  }catch(error){
   console.log(error);
  }
}

  return (
  // <div></div>
    // <div className='max-width explore-section'>
    //   <div className='collection-title'>{collectionName}</div>
    //   <div className='explore-grid'>
       <ExploreCard restaurant={restaurants}/>
      // </div>
    //  </div>

  )
}

export default ExploreSection