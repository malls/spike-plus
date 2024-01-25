import './SiteFooter.css'

function SiteFooter () {
	return (
		<footer>
			<div className='footer-row'>
				<a href='mailto:info@spikeplus.studio'><div>info@spikeplus.studio</div></a>
				<div className='footer-spacer'></div>
				<a href='https://www.instagram.com/spikeplus.studio/' target='_blank' rel='noreferrer'><div>Instagram</div></a>
			</div>
			<div className='footer-row'>
				<div className='footer-spacer'></div>
				<div className='footer-spacer'></div>

				<a href='https://www.linkedin.com/spikeplus.studio/' target='_blank' rel='noreferrer'><div>LinkedIn</div></a>
			</div>
			<div className='footer-row'>
				<div className='footer-spacer'></div>
				<div className='footer-spacer'></div>
				<div className='footer-spacer'></div>
			</div>

			<div className='footer-row'>
				<div>© 2024 Spike Plus Studio</div>
				<div className='footer-spacer'></div>
				<div className='footer-spacer'></div>
			</div>
		</footer>
	)
}

export default SiteFooter;