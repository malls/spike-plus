import './Works.css';
import Hero from './Hero.js';
import { Link, useLoaderData } from 'react-router-dom';


export default function Works () { 

	const { data } = useLoaderData();

	return (
		<div className="work-container">
			{data.map((work) => <Link to={`/work/${work.id}`}><Hero heroData={work}></Hero></Link>)}
		</div>
	)
}