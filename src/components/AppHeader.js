import './AppHeader.css';
function AppHeader () {
	return (
		<header>
			<div class="site-title">
				Spike+
			</div>
			<div class="menu">
				<a href="/about"><div class="menu-item">About</div></a>
				<a href="/work"><div class="menu-item menu-item-selected">Work</div></a>
				<a href="/contact"><div class="menu-item">Contact</div></a>
			</div>
		</header>
	)
}

export default AppHeader;