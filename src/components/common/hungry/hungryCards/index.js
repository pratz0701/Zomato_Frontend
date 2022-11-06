import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hungryCard.css";
import "../hungry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
// import Menu from "../../menu/index.js";

const HungryCard = ({ restaurant }) => {
  const [food, setFood] = useState([]);

  let navigate = useNavigate();
  const showMenu = (id) => {
    let path = `/menu/${id}`;
    navigate(path);
  };
  useEffect(() => {
    const options = {
      method: "POST",
      body: JSON.stringify({ user_id: window.localStorage.getItem("id") }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const getRec = async () => {
      const res = await fetch(
        "http://3.111.196.246/main/recommendation/",
        options
      );
      const data = await res.json();
      const finArr = [];
      let arr = data.response;
      arr.forEach((e) => {
        finArr.push(e[0]);
      });
      console.log(finArr);
      setFood(finArr);
    };
    getRec();
  }, []);
  return (
    <div>
      <div>
        <div className="collection-title max-width margin-title">
          Order Online Food in Gurugram
        </div>

        <div className="max-width hungry-section">
          <div className="slider-wrapper">
            <div className="max-width slider">
              {food.map((e) => {
                return (
                  <div className="hungry-main slide" key={e.food_id}>
                    <div
                      className="hungry-card cur-po"
                      onClick={() => showMenu(e.food_id)}
                    >
                      <div className="hungry-card-cover">
                        <img
                          src={e.food_img}
                          alt={e.food_name}
                          className="hungry-card-image"
                        />
                        <div className="delivery-time-hungry ">
                        {Math.round((Math.random()*40 + 30))} min
                        </div>
                        <div className="pro-off-hungry "></div>
                      </div>
                      <div className="res-row-hungry ">
                        <div
                          className="res-name-hungry "
                          style={{ textTransform: "capitalize" }}
                        >
                          {e.res_name}
                        </div>
                        <div style={{'position':'absolute','left':'0','padding-left':'1.6rem','width':'200px','overflow':'hidden'}}>

                          <h6 style={{'textTransform':'capitalize','textAlign':'left'}}>{e.food_name}</h6>
                        </div>
                        {1 && (
                          <div className="res-rating-hungry  absolute-center">
                            {Math.round((Math.random()*5 + 1))} <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                            {/* <i className="fi fi-rr-star absolute-center"></i> */}
                          </div>
                        )}
                      </div>
                      <div className="res-row-hungry ">
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
                        {1 && (
                          <div className="res-price-hungry ">{e.price} Rs</div>
                        )}
                      </div>
                      {1 > 0 && (
                        <div>
                          <div className="card-separator-hungry "></div>
                          <div className="hungry-bottom">
                            {/* <img
                            src={bottomContainers[0]?.image?.url}
                            alt={bottomContainers[0]?.text}
                            style={{ height: "18px" }}
                        /> */}
                            <div className="res-bottom-text-hungry ">
                              tags shown
                            </div>
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
    </div>
  );
};

export default HungryCard;
