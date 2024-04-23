import Hero from './Hero';
import WorkFooter from './WorkFooter';
import { useLoaderData, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import './Work.css';

export default function Work () {
	const { data } = useLoaderData();

	const { pathname } = useLocation();
    useLayoutEffect(() => {
        document.querySelector('.work-container').scrollTo({
            top: 0,
        });
     }, [pathname])


	const sections = data.items.map((project, i) => {
		let title = project.fields.title?.content[0]?.content[0].value || project.fields.title_old;
		return <div className='work-project-container' key={title}>

			<div className='work-project-title'>
				{title}
			</div>

			<Hero heroData={project.fields.headerMedia}></Hero>
			<div className="work-text-container">
				<div className='work-client-tag work-smalltext'>{project.fields.client.fields.name}</div>
				<div className='work-description'>{project.fields.description}</div>
				<div className='mobile-only'></div>
				<div className='work-services'>
					<span className='work-smalltext'>
						Services
					</span>
					<br/>
					{project.fields.services.map((service) => <div key={service}>{service}</div>)}
				</div>
			</div>
			{
				project.fields.media ? 
					<div className="work-work-container">
						{project.fields.media.map((media) => <Hero heroData={media} key={media.fields.title}></Hero>)}
					</div>
				: ''
			}
		</div>
	});

	return (
		<div className="work-container">
			{sections}
			<WorkFooter></WorkFooter>
		</div>
  )
}