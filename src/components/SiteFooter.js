import './SiteFooter.css'

function SiteFooter ({background, hideDesktop}) {


	let footerClass = 'footer-home';
	if (hideDesktop) footerClass += ' hide-desktop';

	if (background === 'white') {
		footerClass += ' footer-whitebg';
	} else {
		footerClass += ' footer-blackbg';
	}
	
	return (
		<footer className={footerClass}>

			<div className='footer-column'>
				<div className='footer-text hide-mobile'><a href='mailto:info@spikeplus.studio'>info@spikeplus.studio</a></div>
				<div className='footer-text hide-mobile'>
					<br/>
				</div>
				<div className='footer-text'>© 2025 Spike Plus Studio</div>
			</div>

			<div className='footer-column'>
				<div className='footer-text'><a href='https://www.instagram.com/spikeplusstudio/' target='_blank' rel='noreferrer'>Instagram</a></div>
				<div className='footer-text'><a href='https://www.linkedin.com/in/spikehibberd/' target='_blank' rel='noreferrer'>LinkedIn</a></div>
				<div className='footer-text'>
					<br/>
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter;