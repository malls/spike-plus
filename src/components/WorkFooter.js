import { Link, useLoaderData } from 'react-router-dom';


import './WorkFooter.css'

function WorkFooter () {
	const { data } = useLoaderData();

	return (
		<footer className='work-footer'>
			<Link to={'/work/' + (+data.id + 1)}> &gt; Next Project</Link>
			<div>
				{ data.title }
			</div>
		</footer>

	)
}

export default WorkFooter;