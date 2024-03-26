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
					<div className='menu-item-link'>
						Work
					</div>
				</NavLink>
				<br/>
				<NavLink
					to="/about">
					<div className='menu-item-link'>
						About
					</div>
				</NavLink>
				<br/>

				<NavLink
					to="/contact">
					<div className='menu-item-link'>
						Contact
					</div>
				</NavLink>
			</nav>
}