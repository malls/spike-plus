import SiteFooter from './SiteFooter.js';
import Spike from './Spike.js';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';

export default function Home () { 

	const { data } = useLoaderData();

	return (
		<div className='home-parent'>
			<Spike></Spike>


			<div className="home-container">
				{data.map((work) => <Link to={`/work/${work.id}`}><img src={work.img} alt={work.alt} className='home-image'/></Link>)}
			</div>
			<SiteFooter></SiteFooter>


		</div>
	)
}
