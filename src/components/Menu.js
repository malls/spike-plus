import { NavLink } from 'react-router-dom';

export default function Menu() {

	let menuOpen = false;

	return  <div className='menu'>
			<section className='menu-top'>
				<div className='menu-toggle-button menu-toggle-button-{ menuOpen ? `on` : `off` }'></div>
			</section>
			<nav className='menu-main menu-toggled-{ menuOpen ? `on` : `off` }'>
				<NavLink
					to="/">
					Work
				</NavLink>
				<NavLink
					to="/about">
					About
				</NavLink>
				<NavLink
					to="/contact">
					Contact
				</NavLink>
			</nav>
	</div>
}