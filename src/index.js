import React from 'react';
import ReactDOM from 'react-dom/client';
import * as contentful from 'contentful';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Home from './components/Home';
import Menu from './components/Menu';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const client = contentful.createClient({
	space: 'sdqvju5hhgeo',
	accessToken: '40CGSGmzpDMpdrieh85H5H6uhlOaQ4mQ9RX32i_8wNM'
});
  
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				loader: async () => {
					let entries = await client.getEntries({
						content_type: 'sp-clients',
						order: 'fields.order',
					});

					let items = entries.items.map((item, i) => {
						return {...item, asset: entries.includes?.Asset[i]}
					})

					return { data: items };
				},
				element: <Home />,
			},
			{
				path: 'menu',
				element: <Menu />,
			},
			{
				path: 'about',
				element: <About />,
				loader: async () => {
					let entry = await client.getEntry('3VCJgHoezjSV4m9rOQFhtz')
					return { data: entry.fields.copy };
				},
			},
			{
				path: 'contact',
				element: <Contact />,
				loader: async () => {
					return { data: [] }
				},
			},
			{
				path: "work/:id",
				element: <Work />,
				loader: async ({params}) => {

					let entries = await client.getEntries({
						content_type: 'sp-projects',
						order: 'fields.order',
						'fields.client.sys.id': params.id
					});

					console.log(entries)
					return { data: entries };
				},
			},
		],
	},
]);

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<RouterProvider router={router} />
	);

reportWebVitals();
