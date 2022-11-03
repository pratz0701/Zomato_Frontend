import React, { useState } from "react";
import "./login.css";

//import { red } from "@mui/core/colors";


const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";

export const register = (theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    display: "block",
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing(2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    position: "relative",
    marginTop: theme.spacing(2),
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:
      "linear-gradient(180deg, rgba(169,198,217,1) 15%, rgba(242,167,75,1) 90%)",
    boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",

    "&:hover": {
      boxShadow: "0px 24px 36px rgba(131,153,167,0.99)",
    },
  },
  avatar: {
    marginTop: 20,
    position: "relative",
    background: "rgba(255,255,255,0.85)",
    width: "100px",
    height: "100px",
    boxShadow: "0px 0px 12px rgba(131,153,167,0.99)",
  },

  icon: {
    width: "80px",
    height: "80px",
    color: "rgba(131,153,167,0.79)",
  },

  form: {
    margin: theme.spacing(4),
  },
  labels: {
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    fontSize: "10px",
    lineHeight: "5px",
    fontFamily: "PT Mono, monospace",
    fontWeight: 300,
    opacity: 0.45,
    color: `${textDark} !important`,
  },

  inputs: {
    position: "relative",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "Cutive Mono, monospace",
    color: textDark,
    fontSize: "14px",
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: "8px",
    border: "1.4px solid",
    boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
    borderColor: borderLight,

    "&:hover": {
      background: "rgba(169,198,217,0.36457423) ",
    },
  },

  button: {
    color: textDark,
    background: "rgba(255,255,255,.45)",
    position: "relative",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(6),
    padding: `${theme.spacing(1.6)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",

    "&::before, &::after": {
      position: "absolute",
      content: '""',
      boxSizing: "border-box",
      borderRadius: "8px",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 1,
    },
    "&::before": {
      borderBottom: "2px solid rgba(255,255,255,.58)",
      borderTop: "2px solid rgba(255,255,255,.58)",
      transform: "scale(0,1)",
    },
    "&::after": {
      borderLeft: "3px solid rgba(255,255,255,.58)",
      borderRight: "3px solid rgba(255,255,255,.58)",
      transform: "scale(1,0)",
    },
    "&:hover::before": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s",
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s",
    },
    "&::first-letter": {
      color: orange,
    },
    "&:hover": {
      background: "rgba(169,198,217,0.8)",
      color: textLight,
    },
  },
  error: {
    border: `1.2px solid ${'red'}`,
    background: "rgba(169,198,217,0.29457423)",
    color: "red",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(3),
  },

  passwordEye: {
    color: "rgba(131,153,167,0.9)",
    opacity: 0.7,
  },
});


export default function Login() {
  const [showModal, setShowModal] = React.useState(false);
  const [input, setInput] = useState("");
  return (
    <>
     
      <button
        className="login"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center bg-opacity-70 bg-gray-900 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-96 rounded-3xl my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-3xl">
                  <h3 className="text-3xl font-semibold text-gray-600">
                    Log in
                  </h3>
                  <button
                    className="p-1 -mt-2"
                    onClick={() => setShowModal(false)}
                  >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-6 w-6 mt-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    className="w-full h-11 -mt-1 text-left text-lg px-4 border border-gray-300 focus:outline-none rounded-md focus:border-8 focus:border-green-800 "
                    type="tel"
                    placeholder="Phone number"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                  />
                  <button
                    className="w-full mt-3 bg-gray-300 font-sans
                                        hover:bg-red-500 mb-2
                                        text-lg py-2 rounded shadow text-white outline-none 
                                        focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    disabled={!input}
                  >
                    Send OTP
                  </button>

                  <h4>or</h4>

                  <button
                    className="w-full mt-3 font-sans border-gray-300
                                        text-lg py-2 rounded text-white border flex justify-center
                                        ease-linear transition-all duration-150"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " viewBox="0 0 20 20" fill="#F57082">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                    <p className="mx-3 text-gray-500 text-lg leading-relaxed">
                      Continue with Email
                    </p>
                  </button>

                  <button
                    className="w-full mt-3 font-sans border-gray-300
                                        text-lg py-2 rounded text-white border flex justify-center
                                        ease-linear transition-all duration-150"
                    type="button"
                  >
                    {/* <svg className="mt-1 h-6 w-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00">
                                            </path>
                                            <path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8">
                                            </path>
                                            <path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446">
                                            </path>
                                            <path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336">
                                            </path>
                                        </svg> */}
                    <p className="mx-3 text-gray-500 text-lg leading-relaxed">
                      Continue with Google
                    </p>
                  </button>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start mx-6 py-3 rounded-3xl">
                  <p className="mb-2 font-light text-gray-800 text-lg leading-relaxed rounded-3xl">
                    New to Zomato?{" "}
                    <span className="text-pink-700">Create account</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
