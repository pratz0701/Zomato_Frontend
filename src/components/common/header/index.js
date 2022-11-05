import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import "./header.css";
<<<<<<< HEAD
import { Login } from './Login';
import Cartbutton from "./cartbutton/index"

=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Login } from "./Login";
//import Login from "./login/index"
import Signup from "./signup/index";
>>>>>>> 7fe922a58a3f10d7e4eccc6213abebfc63194b9c

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [user, setUser] = useState(
    window.localStorage.getItem("id")
      ? {
          id: window.localStorage.getItem("id"),
          email: window.localStorage.getItem("email"),
          username: window.localStorage.getItem("username")
        }
      : null
  );

  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
<<<<<<< HEAD
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Gurgoan</div>
            </div>
            <i className="fi fi-rr-caret-down absolute center "></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              style={{ width: "400px" }}
              placeholder="Search for restaurant , cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>

        {
          <div className="profile-wrapper text-color">
=======
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <div>Gurgoan</div>
            </div>
            <i className="fi fi-rr-caret-down absolute center "></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            <input
              style={{ width: "400px" }}
              placeholder="Search for restaurant , cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>

        {
          <div className="profile-wrapper">
>>>>>>> 7fe922a58a3f10d7e4eccc6213abebfc63194b9c
            {/* <img 
       src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
       alt="Profile"
       className='header-profile-image'
       />
       <div className='header-username'>Pratishtha</div>
       <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i> */}
            {/* <Login />
            <Signup /> */}
<<<<<<< HEAD
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  setOpenLogin(true);
                }
              }
              >
                Login
              </Button>
              <Button>Signup</Button>
              <Cartbutton />
=======
            <Stack direction="row" spacing={3}>
              {!user ? (
                <>
                  <Button
                    onClick={() => {
                      setOpenLogin(true);
                    }}
                  >
                    Login
                  </Button>
                  <Button>Signup</Button>
                </>
              ) : (
                <>Welcome, {user.username}</>
              )}
>>>>>>> 7fe922a58a3f10d7e4eccc6213abebfc63194b9c
            </Stack>
            <Login
              open={openLogin}
              close={() => {
                setOpenLogin(false);
              }}
<<<<<<< HEAD
=======
              setUser={setUser}
>>>>>>> 7fe922a58a3f10d7e4eccc6213abebfc63194b9c
            />
          </div>
        }
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 7fe922a58a3f10d7e4eccc6213abebfc63194b9c

export default Header;
