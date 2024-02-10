import Hero from "./Hero";
import { useLoaderData } from 'react-router-dom';
import './Work.css';

export default function Work () {

	const { data } = useLoaderData();

	const heroData1 = {
		image: data.images[0].img
	};
	const heroData2 = {
		image: data.images[1].img
	};

	  return (
		<div>
			<Hero heroData={heroData1}></Hero>
			<div className="work-text-container">
				Description: {data.description}
				Services: {data.services.map((service) => <div>{service}</div>)}
			</div>
			<Hero heroData={heroData1}></Hero>
			<div className="work-images-container">
				{data.images.slice(2).map((image) => <img src={image.img} alt={image.alt} key={image.key}></img>)}
			</div>
		</div>
  )
}