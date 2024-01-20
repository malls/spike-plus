import './AppHeader.css';
function AppHeader () {
	return (
		<header>

			<div className="menu">
				<a href="/about"><div className="menu-item">About</div></a>
				<a href="/work"><div className="menu-item">Work</div></a>
				<a href="/contact"><div className="menu-item">Contact</div></a>
			</div>
		</header>
	)
}

export default AppHeader;