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
						console.log(work);
						if (data.type === 'video') {
							return <Link to={`/work/${work.id}`} key={work.id}>
									<video autoPlay loop muted playsInline className="home-video">
									<source src={work.url} type="video/mp4"/>
								</video>
							</Link>
						} else {
							return <Link to={`/work/${work.id}`} key={work.id}><img src={work.url} alt={work.alt} className='home-image'/></Link>
						}

					})
				}
			</div>
			<SiteFooter></SiteFooter>

		</div>
	)
}
