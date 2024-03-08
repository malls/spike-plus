import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import './AppHeader.css';

function styleFunction ({ isActive, isPending }) {
	return {
		color: isActive ? "#B8B8B8" : "inherit",
		padding: '30px 15px'
	};
}

function AppHeader () {

	let { pathname } = useLocation();
	let navigate = useNavigate();

	function back() {
		navigate(-1);
	}

	function blackOrWhite () {
		if (['/about', '/contact', '/menu'].includes(pathname)) return 'white-bg header-small';
		if (pathname === '/') return 'black-bg header-big';

		return 'black-bg header-small';
	}

	function hideOnHome() {
		if (pathname === '/' || pathname === '/menu') return {display: 'none'};
		return {};
	}

	function hideOnMenu() {
		if (pathname === '/menu') return {display: 'none'};
		return {};
	}

	function showOnMenu() {
		if (pathname === '/menu') return {};
		return {display: 'none'};
	
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

				<Link to="/menu" style={hideOnMenu()}>
					<div className="nav-menu-mobile">
						<div className="burger-line"></div>
						<div className="burger-line"></div>
						<div className="burger-line"></div>
						<br/>
					</div>
				</Link>

				<div className="nav-menu-mobile-leave" onClick={back} style={showOnMenu()}>
					<div className="x-line x-line-left"></div>
					<div className="x-line x-line-right"></div>
					<br/>
				</div>


			</nav>


		</header>
	)
}

export default AppHeader;