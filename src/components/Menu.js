import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu() {

	let menuOpen = false;

	return  <nav className='menu-main'>
				<div className='menu-header'>
					Spike +
				</div>
				<NavLink
					to="/">
					Work
				</NavLink>
				<br/>
				<NavLink
					to="/about">
					About
				</NavLink>
				<br/>

				<NavLink
					to="/contact">
					Contact
				</NavLink>
			</nav>
}