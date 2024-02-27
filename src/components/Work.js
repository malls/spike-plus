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
				Description: {data.description}
				Services: {data.services.map((service) => <div>{service}</div>)}
			</div>
			{data.images.slice(1).map((image) => <Hero heroData={image}></Hero>)}
		</div>
  )
}