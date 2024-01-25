import './Works.css';
import Hero from './Hero.js';
import { useLoaderData } from 'react-router-dom';

export default function Works () { 

	const { data } = useLoaderData();

	return (
		<div className="work-container">
			{data.map((work) => <Hero heroData={work}></Hero>)}
		</div>
	)
}