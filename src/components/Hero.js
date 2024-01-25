import './Hero.css';
import {Link} from 'react-router-dom';

export default function Hero ({heroData}) {

	return (
		<Link to={`/work/${heroData.id}`}>
			<div className="hero-container" style={{backgroundImage: `url(${heroData.image})`}}>
				<div className="hero-caption">
					{heroData.title}<br/>
					{heroData.client}<br/>
					{heroData.photographer}<br/>
				</div>
			</div>
		</Link>
	)
}
