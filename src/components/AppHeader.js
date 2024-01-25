import { NavLink, useLocation } from "react-router-dom";
import './AppHeader.css';

function styleFunction ({ isActive, isPending }) {
	return {
		color: isActive ? "#B8B8B8" : "inherit",
		padding: '15px'
	};
}

function AppHeader () {

	let {pathname} = useLocation();

	function blackOrWhite () {
		if (['/about', '/contact'].includes(pathname)) return 'white-bg header-small';
		if (pathname === '/') return 'black-bg header-big';

		return 'black-bg header-small';
	}

	function hideOnHome() {
		if (pathname === '/') return {display: 'none'};
		return {};
	}

	return (
		<header className={blackOrWhite()}>

			<NavLink
				to="/"
				style={hideOnHome()}
				className={'nav-home'}>
					Spike Plus
			</NavLink>

			<div className="nav-menu">
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