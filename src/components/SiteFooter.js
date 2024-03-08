import './SiteFooter.css'

function SiteFooter ({background}) {

	let backgroundClass = `${background === 'white' ? 'footer-whitebg' : 'footer-blackbg'} footer-home`;
	
	return (
		<footer className={backgroundClass}>

			<div className='footer-column'>
				<a href='mailto:info@spikeplus.studio'><div className='footer-email'>info@spikeplus.studio</div></a>
				<div className='footer-spacer'>
					<br/>
				</div>
				<div>© 2024 Spike Plus Studio</div>
			</div>
			<div className='footer-column'>
				<a href='https://www.instagram.com/spikeplus.studio/' target='_blank' rel='noreferrer'><div>Instagram</div></a>
				<a href='https://www.linkedin.com/spikeplus.studio/' target='_blank' rel='noreferrer'><div>LinkedIn</div></a>
				<div className='footer-spacer'>
					<br/>
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter;