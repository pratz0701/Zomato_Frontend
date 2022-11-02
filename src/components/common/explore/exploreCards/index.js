import React from "react";
import { useNavigate } from "react-router-dom";
import "./exploreCard.css";
import "../explore.css";
import Menu from '../../menu/index.js'

const ExploreCard = ({ restaurant }) => {
  let navigate = useNavigate(); 
  const showMenu=(id)=>{
    let path = `/menu/${id}`; 
    navigate(path);
  }

  return (
    <div>
      <div className="collection-title max-width">
        Order Online Food in Gurugram
      </div>
      <div className="max-width explore-section">
        <div>
          <div className="max-width explore-grid">
            {JSON.parse(JSON.stringify(restaurant)).map((e) => {
              return (
                // <img src="https://i.ytimg.com/vi/Yg3GQemWXgc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwFEL4wMdI7jHbTq38_eoxboF_SA" alt=" "/>
                <div div>
                <div className="explore-card cur-po" onClick={()=>showMenu(e.res_id)}>
                  <div className="explore-card-cover">
                    <img
                      src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
                      alt={e.res_name}
                      className="explore-card-image"
                      
                    />
                    <div className="delivery-time">40 min</div>
                    <div className="pro-off">ProOff</div>
                    <div className="discount absolute-center">Discount</div>
                  </div>
                  <div className="res-row">
                    <div className="res-name" style={{textTransform:"capitalize"}}>{e.res_name}</div>
                    {1 && (
                      <div className="res-rating absolute-center">
                        {} <i className="fi fi-rr-star absolute-center"></i>
                      </div>
                    )}
                  </div>
                  <div className="res-row">
                    {
                      // <div className='res-cuisine'>
                    //   {
                        /* {cuisines.map((item, i) => {
                            return (
                                <span className='res-cuisine-tag'>
                                    {item}
                                    {i !== cuisines.length - 1 && ","}
                                </span>
                            );
                        })} */
                    //   }
                      // </div>
                    }
                    {1 && <div className="res-price">100rs</div>}
                  </div>
                  {1 > 0 && (
                    <div>
                      <div className="card-separator"></div>
                      <div className="explore-bottom">
                        {/* <img
                            src={bottomContainers[0]?.image?.url}
                            alt={bottomContainers[0]?.text}
                            style={{ height: "18px" }}
                        /> */}
                        {/* <div className="res-bottom-text">{bottomContainers[0]?.text}</div> */}
                      </div>
                    </div>
                  )}
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
