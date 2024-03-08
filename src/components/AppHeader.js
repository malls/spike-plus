import { Link, NavLink, useLocation } from "react-router-dom";
import './AppHeader.css';

function styleFunction ({ isActive, isPending }) {
	return {
		color: isActive ? "#B8B8B8" : "inherit",
		padding: '30px 15px'
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
			<nav>
				<NavLink
					to="/"
					className={'nav-home'}>
						<span style={hideOnHome()}>Spike Plus</span>
				</NavLink>

				<div className="nav-menu">
					<NavLink
						style={styleFunction}
						className={( isActive, isPending) => {
							return isActive ? "active" : isPending ? "pending" : ""
						}}
						to="/">
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

				<Link to="/menu">
					<div className="nav-menu-mobile">
						<div className="burger-line"></div>
						<div className="burger-line"></div>
						<div className="burger-line"></div>
						<br/>
					</div>
				</Link>

			</nav>


		</header>
	)
}

export default AppHeader;