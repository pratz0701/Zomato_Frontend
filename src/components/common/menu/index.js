import React, { useEffect, useState } from "react";
import "./index.css";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {

        const fetchMenu = async () => {
            const res = await fetch(`http://3.111.196.246/main/all_res_dishes/?res_id=${window.location.href.split('/').pop()}`)
            const data = await res.json();
            setMenu(data.response);
            
        }
        fetchMenu();
    }, [])

    return (
        <div class="main max-width">
            <div class="section-title">
                <h2>our menu</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eum!
                </p>
            </div>
            <div class="menus">
                {
                    menu.map(e => {
                        return (
                            <>
                                <div className="bada_bada max-width"></div>
                                <div class="single-menu" key={e.food_id}>
                                    <img src="https://via.placeholder.com/150C" alt="" />
                                    <div class="menu-content">
                                        <h5>
                                            {e.food_name} <span>Rs {e.price}</span>
                                        </h5>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Menu;
