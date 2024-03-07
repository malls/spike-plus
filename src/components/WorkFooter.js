import { Link, useLoaderData } from 'react-router-dom';


import './WorkFooter.css'

function WorkFooter () {
	const { data } = useLoaderData();

	console.log(data);

	return (
		<footer className='work-footer'>
			<div className='footer-row'>
				<Link to={'/work/' + (+data.id + 1)}> > Next</Link>
				<div>
					{ data.title }
				</div>
			</div>
		</footer>

	)
}

export default WorkFooter;