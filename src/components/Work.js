import Hero from "./Hero";
import WorkFooter from "./WorkFooter";
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
				<div>Project Description</div>
				<div>{data.description}</div>
				<div>
					Services
					<br/>
					{data.services.map((service) => <div key={service}>{service}</div>)}
				</div>
			</div>
			{data.images.slice(1).map((image) => <Hero heroData={image} key={image.img}></Hero>)}
			<WorkFooter></WorkFooter>
		</div>
  )
}