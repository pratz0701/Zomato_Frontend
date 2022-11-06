import React from "react";
import { useNavigate } from "react-router-dom";
import "./hungryCard.css";
import "../hungry.css";
// import Menu from "../../menu/index.js";

const HungryCard = ({ restaurant }) => {
  let navigate = useNavigate();
  const showMenu = (id) => {
    let path = `/menu/${id}`;
    navigate(path);
  };

  return (
    <div>
      <div>
        <div className="collection-title max-width margin-title">
          Order Online Food in Gurugram
        </div>

        <div className="max-width hungry-section">
          <div className="slider-wrapper">
            <div className="max-width  slider">
              {JSON.parse(JSON.stringify(restaurant)).map((e) => {
                return (
                  // <img src="https://i.ytimg.com/vi/Yg3GQemWXgc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwFEL4wMdI7jHbTq38_eoxboF_SA" alt=" "/>
                  <div className="hungry-main slide">
                    <div
                      className="hungry-card cur-po"
                      onClick={() => showMenu(e.res_id)}
                    >
                      <div className="hungry-card-cover">
                        <img
                          src={e.res_img}
                          alt={e.res_name}
                          className="hungry-card-image"
                        />
                        <div className="delivery-time-hungry ">
                          {e.delivery_time} min
                        </div>
                        <div className="pro-off-hungry ">{e.promo}</div>
                        {/* <div className="discount absolute-center">Discount</div> */}
                      </div>
                      <div className="res-row-hungry ">
                        <div
                          className="res-name-hungry "
                          style={{ textTransform: "capitalize" }}
                        >
                          {e.res_name}
                        </div>
                        {1 && (
                          <div className="res-rating-hungry  absolute-center">
                            {e.rating}{" "}
                            <i className="fi fi-rr-star absolute-center"></i>
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
                          <div className="res-price-hungry ">{e.price}</div>
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
                              1300 orders have been placed
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
