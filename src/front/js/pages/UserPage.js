import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const UserPage = () => {
  const { store } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    const token = store.token;
    if (!token) {
      navigate("/");
    }
  }, [store.token, navigate]);

  return (
    <>
    
      <div>
        <h3 className="d-flex justify-content-center mt-4 fw-bold">
          Welcome you are our "first user"!! this is your profile.
        </h3>
        {/* <div className="container w-50 bg-dark text-light rounded">
      </div> */}
      </div>
    </>
  );
};