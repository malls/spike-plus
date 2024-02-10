import './Hero.css';

export default function Hero ({heroData}) {

	return (
		<div className="hero-container" style={{backgroundImage: `url(${heroData.image})`}}>
			<div className="hero-caption">
				{heroData.title}<br/>
				{heroData.client}<br/>
				{heroData.photographer}<br/>
			</div>
		</div>
	)
}
