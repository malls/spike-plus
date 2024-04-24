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
					E-commerce
					<br/>
					Games Design and Production
					<br/>
					CGI
					<br/>
					Web3 & Virtual Commerce
					<br/>
					Web and App Design
					<br/>
					UX and UI Design
					<br/>
					Service & Experience Design
					<br/>
					<br/>
				</div>
				<div className='info-column'>
					03. Production & Talent
					<br/>
					Project Production
					<br/>
					Rights and Usage
					<br/>
					Casting
					<br/>
					Talent and Celebrity Negotiations
					<br/>
					Brand Collaborations
					<br/>
					Influencer Management
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
