import './About.css';
import SiteFooter from './SiteFooter';

export default function Contact () { 
	return (
		<div className='info contact'>
				<div className='info-label'>Contact</div>
				<div className="info-text-contact">
					<a href="mailto:Info@spikeplus.studio">Info@spikeplus.studio </a>
				</div>
				<div className='info-spacer-contact'></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			<SiteFooter hideDesktop={true} background={'white'}></SiteFooter>
		</div>
	)
}
