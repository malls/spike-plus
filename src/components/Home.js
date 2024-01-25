import SiteFooter from './SiteFooter.js';
import Spike from './Spike.js';
import './Home.css';
import { useLoaderData } from 'react-router-dom';


export default function Home () { 

	const { data } = useLoaderData();

	return (
		<div className='home-parent'>
			<Spike></Spike>


			<div className="home-container">
				{data.map((work) => <img src={work.img} alt={work.alt} className='home-image'/>)}
			</div>
			<SiteFooter></SiteFooter>


		</div>
	)
}
