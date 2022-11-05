import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Login } from "./Login";
// import Login from "./login/index"
// import Signup from "./signup/index";

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
        className="header-logo svg"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" ></FontAwesomeIcon>
              <div>Gurgoan</div>
            </div>
            <i className="fi fi-rr-caret-down absolute center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon absolute center"></FontAwesomeIcon>
            <input
              style={{ width: "400px" }}
              placeholder="Search for restaurant , cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>

        {
          <div className="profile-wrapper">
            {/* <img 
       src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
       alt="Profile"
       className='header-profile-image'
       />
       <div className='header-username'>Pratishtha</div>
       <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i> */}
            {/* <Login />
            <Signup /> */}
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
                <div className="user_size">Welcome, {user.username}</div>
              )}
            </Stack>
            <Login
              open={openLogin}
              close={() => {
                setOpenLogin(false);
              }}
              setUser={setUser}
            />
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
