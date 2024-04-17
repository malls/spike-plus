import './About.css';
import { useLoaderData } from 'react-router-dom';


export default function About () { 
	const { data } = useLoaderData();
	return (
		<div className="info about">
			<div className='info-label info-label-about'>About</div>
			<div className="info-text">
				{
					data.content.map(p => <p>{p.content[0].value}</p> )
				}
			</div>
			<div className='info-spacer'></div>
			<div className='info-label info-label-services'>Services</div>
			<div className='info-column-container'>
				<div className='info-column'>
					01. Branding
					<br/>
					Purpose and Brand Strategy
					<br/>
					Brand Architecture
					<br/>
					Brand Design
					<br/>
					Custom Typography & Typefaces
					<br/>
					Naming & Verbal Identity
					<br/>
					Visual Image Direction
					<br/>
					Integrated Campaigns & Activations
					<br/>
					Product & Packaging Design
					<br/>
					Social Media & Content
					<br/>
					OOH and Disruptive Media
					<br/>
					<br/>
				</div>
				<div className='info-column'>
					02. Technology
					<br/>
					Games design and production
					<br/>
					CGI
					<br/>
					Web3 & Virtual Commerce
					<br/>
					Web and app design
					<br/>
					UX and UI design
					<br/>
					Service & Experience Design
					<br/>
					e-commerce
					<br/>
					<br/>
				</div>
				<div className='info-column'>
					03. Production & Talent
					<br/>
					Project Production
					<br/>
					Rights and usage
					<br/>
					Casting
					<br/>
					Talent and Celebrity negotiations
					<br/>
					Brand collaborations
					<br/>
					Influencer management
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</div>
			<div className='info-spacer'></div>
		</div>
	)
}
