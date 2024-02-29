import SiteFooter from './SiteFooter.js';
import Spike from './Spike.js';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export default function Home () { 

	const [media,setMedia] = useState([]);

	const { data } = useLoaderData();

	let temlatedData = [templateNext()];

	function templateNext() {
		const nextItem = data.shift();
		if (!nextItem) return;

		if (nextItem.mediaType === 'video') {
			return (
				<Link to={`/work/${nextItem.id}`} key={nextItem.id}>
					<video autoPlay loop muted playsInline className="home-media" onLoadedData={loadNext}>
							<source src={nextItem.url}/>
					</video>
				</Link>
			);
		} else {
			return <Link to={`/nextItem/${nextItem.id}`} key={nextItem.id}><img src={nextItem.url} alt={nextItem.alt} className='home-media' onLoad={loadNext}/></Link>;
		}
	}


	function loadNext() {
		if (data.length === 0) return;
		setMedia([...media, templateNext()]);
	}

	return (
		<div className='home-parent'>
			<Spike></Spike>

			<div className="home-container">
				{
					temlatedData.map((item) => item)
				}
			</div>
			<SiteFooter></SiteFooter>

		</div>
	)
}
