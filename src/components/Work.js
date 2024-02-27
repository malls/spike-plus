import Hero from "./Hero";
import { useLoaderData } from 'react-router-dom';
import './Work.css';

export default function Work () {

	const { data } = useLoaderData();

	const heroData1 = {
		img: data.images[0].img
	};

	return (
		<div className="work-container">
			<Hero heroData={heroData1}></Hero>
			<div className="work-text-container">
				<div className="work-description-title">Project Description</div>
				<div className="work-description">{data.description}</div>
				<div className="work-services">
					Services
					<br/>
					{data.services.map((service) => <div>{service}</div>)}
				</div>
			</div>
			{data.images.slice(1).map((image) => <Hero heroData={image}></Hero>)}
		</div>
  )
}