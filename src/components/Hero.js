import './Hero.css';

export default function Hero ({heroData}) {

	if (heroData.fields.file.contentType.includes('video')) {
		return (
			<div className="hero-container">
				<video autoPlay loop muted playsInline className="hero-video">
					<source src={heroData.fields.file.url} type="video/mp4"/>
				</video>
			</div>
		)
		
	} else {
		return (
			<div className="hero-container">
				<img src={heroData.fields.file.url} alt={heroData.fields.alt} className="hero-image"/>
					{/* <div className="hero-caption">
						{heroData.title}<br/>
						{heroData.client}<br/>
						{heroData.photographer}<br/>
					</div> */}
			</div>
		)
	}

}
