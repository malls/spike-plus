import Hero from './Hero';
import WorkFooter from './WorkFooter';
import { useLoaderData } from 'react-router-dom';
import './Work.css';

export default function Work () {

	const { data } = useLoaderData();

	return (
		<div className="work-container">
			<Hero heroData={data.content[0]}></Hero>
			<div className="work-text-container">
				<div>{data.client}</div>
				<div>{data.description}</div>
				<div>
					Services
					<br/>
					{data.services.map((service) => <div key={service}>{service}</div>)}
				</div>
			</div>
			<div className="work-work-container">
				{data.content.slice(1).map((media) => <Hero heroData={media} key={media.url}></Hero>)}
			</div>
			<WorkFooter></WorkFooter>
		</div>
  )
}