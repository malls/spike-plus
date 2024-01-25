import './About.css';

export default function Contact () { 
	return (
		<div className="info">
			<div className='info-label'>Contact</div>
			<div className="info-text">
				<a href="mailto:Info@spikeplus.studio">Info@spikeplus.studio </a>
			</div>
			<div className='info-spacer'></div>

			<div className='info-label'>New business</div>
			<div className="info-text">
				Print & Contact
				<br/>
				Dean Snyder
				<br/>
				Info@printandcontact.com
				<br/>
				212 436 8845
			</div>
			<div className='info-spacer'></div>
		</div>
	)
}
