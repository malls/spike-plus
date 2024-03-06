import SiteFooter from './SiteFooter.js';
import Spike from './Spike.js';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

export default function Home () {
	const { data } = useLoaderData();

	let [media, setMedia] = useState([]);
	let [index, setIndex] = useState(0);

	const templateNext = useCallback(() => {
		if (!data[index]) return;
		setIndex(index + 1);
		setMedia(prevMedia => [...prevMedia, templateData(data[index]), templateNext]);
	}, [data, index]);

	useEffect(() => {
		templateNext();
	}, [templateNext]);

	function templateData(nextItem, cb) {
		if (!nextItem) return;

		if (nextItem.mediaType === 'video') {
			return (
				<Link to={`/work/${nextItem.id}`} key={nextItem.id}>
					<div className='home-media-container'>
						<div className='home-media-client'>
							{nextItem.client}
						</div>
							<video autoPlay loop muted playsInline className="home-media" onLoadedData={cb}>
									<source src={nextItem.url}/>
							</video>
					</div>
				</Link>
			);
		} else {
			return (
				<Link to={`/work/${nextItem.id}`} key={nextItem.id}>
					<div className='home-media-container'>
						<div className='home-media-client'>
							{nextItem.client}
						</div>
						<img src={nextItem.url} alt={nextItem.alt} className='home-media' onLoad={cb}/>
					</div>
				</Link>
			);
		}
	}

	return (
		<div className='home-parent'>
			<Spike></Spike>

			<div className="home-container">
				{
					media
				}
			</div>
			<SiteFooter></SiteFooter>

		</div>
	)
}
