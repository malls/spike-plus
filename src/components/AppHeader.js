import { NavLink } from "react-router-dom";
import './AppHeader.css';

function styleFunction ({ isActive, isPending }) {
	return {
		color: isActive ? "#B8B8B8" : "inherit",
		fontWeight: isActive ? "bold" : "inherit",
		padding: '15px'

	};
}

function AppHeader () {
	return (
		<header>
			<span>Spike Plus</span>

			<div className="menu">
				<NavLink
					style={styleFunction}
					className={( isActive, isPending) => {
						return isActive ? "active" : isPending ? "pending" : ""
					}}
					to="/work">
					Work
				</NavLink>
				<NavLink
					style={styleFunction}
					className={( isActive, isPending) => {
						return isActive ? "active" : isPending ? "pending" : ""
					}}
					to="/about">
					About
				</NavLink>
				<NavLink
					style={styleFunction}
					className={( isActive, isPending) => {
						return isActive ? "active" : isPending ? "pending" : ""
					}}
					to="/contact">
					Contact
				</NavLink>
			</div>
		</header>
	)
}

export default AppHeader;