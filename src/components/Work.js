import Hero from './Hero';
import WorkFooter from './WorkFooter';
import { useLoaderData } from 'react-router-dom';
import './Work.css';

export default function Work () {
	const { data } = useLoaderData();

	const sections = data.projects.map((project) => {
		return <div className='work-project-container'>

			<div className='work-project-title'>
				{project.title}
			</div>

			<Hero heroData={project.content[0]}></Hero>
				<div className="work-text-container">
					<div className='work-client-tag'>{data.client}</div>
					<div className='work-description'>{project.description}</div>
					<div className='mobile-only'></div>
					<div className='work-services'>
						Services
						<br/>
						{project.services.map((service) => <div key={service}>{service}</div>)}
					</div>
				</div>
				<div className="work-work-container">
					{project.content.slice(1).map((media) => <Hero heroData={media} key={media.url}></Hero>)}
				</div>
		</div>
	});

	console.log({data, sections});

	return (
		<div className="work-container">
			{sections}
			<WorkFooter></WorkFooter>
		</div>
  )
}