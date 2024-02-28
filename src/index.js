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
								client: "Client Name 1",
								id: 1,
								title: "Title 1",
								photographer: "Photographer 1 Name",
								img: "https://picsum.photos/2700/1200",
							},
							{
								client: "Client Name 2",
								id: 2,
								title: "Title 2",
								photographer: "Photographer Name 2",
								img: "https://picsum.photos/1600/800",
							},
							{
								client: "Client Name 3",
								id: 3,
								title: "Title 3",
								photographer: "Photographer Name 3",
								img: "https://picsum.photos/2900/1200",
							},
							{
								client: "Client Name 4",
								id: 4,
								title: "Title 4",
								photographer: "Photographer Name 4",
								img: "https://picsum.photos/2801/1800",
							},
							{
								client: "Client Name 5",
								id: 5,
								title: "Title 5",
								photographer: "Photographer Name 5",
								img: "https://picsum.photos/2990/1300",
							}
						]
					}
					return fetch("/api/home").then((res) => res.json());
				},
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
				loader: async () => {
					window.scrollTo(0, 0);

					return { data: [] }
					return fetch("/api/about").then((res) => res.json());
				},
			},
			{
				path: "contact",
				element: <Contact />,
				loader: async () => {
					window.scrollTo(0, 0);

					return { data: [] }
					return fetch("/api/contact").then((res) => res.json());
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
								{ url: 'http://localhost:8000/IMG_7304.mov', alt: '', type: 'video'},
								{ url: "https://picsum.photos/2700/1201", alt: '', type: 'image'},
								{ url: "https://picsum.photos/2700/1202", alt: '', type: 'image'},
								{ url: "https://picsum.photos/2700/1203", alt: '', type: 'image'},
								{ url: "https://picsum.photos/2700/1205", alt: '', type: 'image'},
								{ url: "https://picsum.photos/2700/1207", alt: '', type: 'image'},
								{ url: "https://picsum.photos/2700/1209", alt: '', type: 'image'},
								{ url: "https://picsum.photos/2700/1213", alt: '', type: 'image'},
							]
						}
					}
					return fetch("/api/work/:id").then((res) => res.json());
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
