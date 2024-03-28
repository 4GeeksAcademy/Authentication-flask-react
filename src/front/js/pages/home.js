import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
		
		<div className="data-card container rounded bg-secondary text-light">
		  <div className="row my-3">
			<div className="col-12 col-lg-3 d-flex justify-content-center">
			 
			</div>
			<div className="col-12 col-lg-6 d-flex justify-content-center">
			  <span className="my-4 text-home">WELCOME TO MY FIRST LOGIN </span>
			</div>
			<div className="col-12 col-lg-3 d-flex justify-content-center">
			  
			</div>
		  </div>
		</div>
		<div className="data-card container rounded bg-secondary text-light d-flex justify-content-center">
		  <span className="my-3">
			Feel free to make a resgistation and then login 
		  </span>
		</div>
	  </div>
	);
};
