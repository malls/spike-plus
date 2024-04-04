import { Link, useLoaderData } from 'react-router-dom';


import './WorkFooter.css'

function WorkFooter () {
	const { data } = useLoaderData();

	return (
		<footer className='work-footer'>
			<Link to={'/work/' + (+data.next.id)}> &gt; Next Project</Link>
			<div>
				{ data.next.client }
			</div>
		</footer>

	)
}

export default WorkFooter;