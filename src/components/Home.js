import SiteFooter from './SiteFooter.js';
import Spike from './Spike.js';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export default function Home () {
	const { data } = useLoaderData();

	let [media, setMedia] = useState(<div></div>);

	function templateAll() {
		setMedia(data.map((item, i) =>  i ? templateData(item) : ''));
	}

	function templateData(nextItem, cb) {
		if (!nextItem) return;

		if (nextItem.mediaType === 'video') {
			return (
				<Link to={`/work/${nextItem.id}`} key={nextItem.id}>
					<video autoPlay loop muted playsInline className="home-media" onLoadedData={cb}>
							<source src={nextItem.url}/>
					</video>
				</Link>
			);
		} else {
			return <Link to={`/work/${nextItem.id}`} key={nextItem.id}>
					<img src={nextItem.url} alt={nextItem.alt} className='home-media' onLoad={cb}/>
				</Link>;
		}
	}

	return (
		<div className='home-parent'>
			<Spike></Spike>

			<div className="home-container">
				{
					templateData(data[0], templateAll)
				}
				{
					media
				}
			</div>
			<SiteFooter></SiteFooter>

		</div>
	)
}
