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
				{
					data.map((work) => {
						if (work.mediaType === 'video') {
							return <Link to={`/work/${work.id}`} key={work.id}>
									<video autoPlay loop muted playsInline className="home-media">
									<source src={work.url}/>
								</video>
							</Link>
						} else {
							return <Link to={`/work/${work.id}`} key={work.id}><img src={work.url} alt={work.alt} className='home-media'/></Link>
						}

					})
				}
			</div>
			<SiteFooter></SiteFooter>

		</div>
	)
}
