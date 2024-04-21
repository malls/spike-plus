import { Link, useLoaderData } from 'react-router-dom';


import './WorkFooter.css'

function WorkFooter () {
	const { next } = useLoaderData();

	return (
		<footer className='work-footer'>
			<Link to={'/work/' + (next.id)}> &gt; Next Project</Link>
			<div>
				{ next.name }
			</div>
		</footer>

	)
}

export default WorkFooter;