import './SiteFooter.css'

function SiteFooter ({background}) {

	let backgroundClass = `${background === 'white' ? 'footer-whitebg' : 'footer-blackbg'} footer-home`;
	
	return (
		<footer className={backgroundClass}>

			<div className='footer-column'>
				<a href='mailto:info@spikeplus.studio'><div className='footer-text hide-mobile'>info@spikeplus.studio</div></a>
				<div className='footer-text hide-mobile'>
					<br/>
				</div>
				<div className='footer-text'>© 2024 Spike Plus Studio</div>
			</div>
			<div className='footer-column'>
				<a href='https://www.instagram.com/spikeplus.studio/' target='_blank' rel='noreferrer'><div className='footer-text'>Instagram</div></a>
				<a href='https://www.linkedin.com/spikeplus.studio/' target='_blank' rel='noreferrer'><div className='footer-text'>LinkedIn</div></a>
				<div className='footer-text'>
					<br/>
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter;