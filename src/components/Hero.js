import './Hero.css';

export default function Hero ({heroData}) {

	if (heroData.type === 'video') {
		//TODO
		return (
			<div className="hero-container">
				<video autoPlay loop muted playsInline className="hero-video">
					<source src={heroData.video} type="video/mp4"/>
				</video>
				<div className="hero-caption">
					{heroData.title}<br/>
					{heroData.client}<br/>
					{heroData.photographer}<br/>
				</div>
			</div>
		)
		
	} else {
		return (
			<div className="hero-container" style={{backgroundImage: `url(${heroData.img})`}}>
					<div className="hero-caption">
						{heroData.title}<br/>
						{heroData.client}<br/>
						{heroData.photographer}<br/>
					</div>
				</div>
			)
	}

}
