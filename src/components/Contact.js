import './About.css';
import SiteFooter from './SiteFooter';

export default function Contact () { 
	return (
		<div className='contact-container'>
			<div className="info">
				<div className='info-label'>Contact</div>
				<div className="info-text">
					<a href="mailto:Info@spikeplus.studio">Info@spikeplus.studio </a>
				</div>
				<div className='info-spacer'></div>

				<div className='info-label'>New business</div>
				<div className="info-text">
					<div className='info-column'>
						Print & Contact
						<br/>
						Dean Snyder
						<br/>
						<a href="mailto:Info@printandcontact.com">Info@printandcontact.com</a>
						<br/>
						<a href="tel:+1212-436-8845">212 436 8845</a>
					</div>
				</div>

				<div className='info-spacer'></div>
			</div>
			<SiteFooter></SiteFooter>
		</div>

	)
}
