import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-gray d-flex justify-content-between">
			<div className="container">
				<div className="ml-auto d-flex justify-content-end">
					<Link to="/" className="btn btn-success">
						Home
					</Link>
				</div>
					<Link to="/Login" className="btn btn-warning">
						Log in
					</Link>
					<Link to="/registation" className="btn btn-primary">
						Register
					</Link>
			</div>
		</nav>
	);
};
