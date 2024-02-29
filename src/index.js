import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";





//https://www.contentful.com/developers/docs/references/graphql/#/introduction/http-methods
function generateApiUrl (query) {
	return `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master?query=${query}`;
}


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				loader: async () => {
					window.scrollTo(0, 0);

					return {
						data: [
							{
								client: 'Forrest',
								id: 0,
								title: "Title 0",
								photographer: "Photographer 0 Name",
								mediaType: "video",
								url: '/ella goerner meditation on the economy one.mp4'
							},
							{
								client: 'Forrest',
								id: 1,
								title: "Title 1",
								photographer: "Photographer 1 Name",
								mediaType: "video",
								url: '/DSCF6975.MOV'
							},
							{
								client: "Client Name 2",
								id: 2,
								title: "Title 2",
								photographer: "Photographer Name 2",
								mediaType: "image",
								url: "https://picsum.photos/1600/800",
							},
							{
								client: "Client Name 3",
								id: 3,
								title: "Title 3",
								photographer: "Photographer Name 3",
								mediaType: "video",
								url: "/DSCF6962.MOV",
							},
							{
								client: "Client Name 4",
								id: 4,
								title: "Title 4",
								photographer: "Photographer Name 4",
								mediaType: "image",
								url: "https://picsum.photos/2801/1800",
							},
							{
								client: "Client Name 5",
								id: 5,
								title: "Title 5",
								photographer: "Photographer Name 5",
								mediaType: "image",
								url: "https://picsum.photos/2990/1300",
							},
							{
								client: "Client Name 1",
								id: 6,
								title: "Title 1",
								photographer: "Photographer 1 Name",
								mediaType: "image",
								url: "https://picsum.photos/2700/1200",
							},
						]
					}
					return fetch(generateApiUrl("home"), {
						method: 'POST',
						headers: {
							contentType: 'application/json',
						},
						body: JSON.stringify({
							query: `{
							  characters {
								results {
								  name
								}
							  }
							}`
						  })

					}).then((res) => res.json());
				},
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
				loader: async () => {
					window.scrollTo(0, 0);

					return { data: [] }
					return fetch(generateApiUrl("about", {
						method: 'POST',

					})).then((res) => res.json());
				},
			},
			{
				path: "contact",
				element: <Contact />,
				loader: async () => {
					window.scrollTo(0, 0);

					return { data: [] }
					return fetch(generateApiUrl("contact"), {
						method: 'POST',

					}).then((res) => res.json());
				},
			},
			{
				path: "work/:id",
				element: <Work />,
				loader: async ({params}) => {
					window.scrollTo(0, 0);

					return { 
						data: {
							id: params.id,
							services: [
								'service1',
								'service2',
								'service3',
								'service4',
							],
							title: "Project title",
							description: "Description blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
							content: [
								{ url: '/DSCF6975.MOV', alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'video'},
								{ url: "https://picsum.photos/2700/1201", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
								{ url: "https://picsum.photos/2700/1202", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
								{ url: "https://picsum.photos/2700/1203", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
								{ url: "/ella goerner meditation on the economy one.mp4", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'video'},
								{ url: "https://picsum.photos/2700/1205", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
								{ url: "https://picsum.photos/2700/1207", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
								{ url: "https://picsum.photos/2700/1209", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
								{ url: "https://picsum.photos/2700/1213", alt: '', title: 'Media Title', client: 'Cleint Name', photographer: 'Photographer Name', type: 'image'},
							]
						}
					}
					return fetch(generateApiUrl("work"), {
						method: 'POST',
					}).then((res) => res.json());
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
