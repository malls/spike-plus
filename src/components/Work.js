import Hero from "./Hero";
import { useLoaderData } from 'react-router-dom';


export default function Work () {

	const { data } = useLoaderData();

	const heroData = {
		image: data.images[0].url
	}

	  return (
		<div>
			<Hero heroData={heroData}></Hero>
			<div className="work-text-container">
				Description: {data.description}
				Services: {data.services.map((service) => <div>{service}</div>)}
			</div>
			<div className="work-images-container">
				{data.images.map((image) => <img src={image.url} alt={image.alt} key={image.key}></img>)}
			</div>
		</div>
  )
}