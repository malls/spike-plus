import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
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
					return {
						data: [
							{ img: "https://picsum.photos/2700/1201", alt: '', key: 1 },
							{ img: "https://picsum.photos/2700/1202", alt: '', key: 2 },
							{ img: "https://picsum.photos/2700/1203", alt: '', key: 3 },
							{ img: "https://picsum.photos/2700/1205", alt: '', key: 4 },
							{ img: "https://picsum.photos/2700/1207", alt: '', key: 5 },
							{ img: "https://picsum.photos/2700/1209", alt: '', key: 6 },
							{ img: "https://picsum.photos/2700/1213", alt: '', key: 7 },
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
					return { data: [] }
					return fetch("/api/about").then((res) => res.json());
				},
			},
			{
				path: "contact",
				element: <Contact />,
				loader: async () => {
					return { data: [] }
					return fetch("/api/contact").then((res) => res.json());
				},
			},
			{
				path: "work",
				element: <Works />,
				loader: async () => {
					return {
						data: [
							{
								key: 1,
								client: "Client Name 1",
								id: 'fdsafdsfdsfaaf',
								title: "Title 1",
								photographer: "Photographer 1 Name",
								img: "https://picsum.photos/2700/1200",
							},
							{
								key: 2,
								client: "Client Name 2",
								id: 'fdsafdsdfsafaaf',
								title: "Title 2",
								photographer: "Photographer Name 2",
								img: "https://picsum.photos/1600/800",
							},
							{
								key: 3,
								client: "Client Name 3",
								id: 'fdsafdsfdasaf',
								title: "Title 3",
								photographer: "Photographer Name 3",
								img: "https://picsum.photos/2900/1200",
							},
							{
								key: 4,
								client: "Client Name 4",
								id: 'fdsasdfafdsaf',
								title: "Title 4",
								photographer: "Photographer Name 4",
								img: "https://picsum.photos/2801/1800",
							},
							{
								key: 5,
								client: "Client Name 5",
								id: 'fdsafdgf',
								title: "Title 5",
								photographer: "Photographer Name 5",
								img: "https://picsum.photos/2990/1300",
							}
						]
					}
					return fetch("/api/work").then((res) => res.json());
				},
			},
			{
				path: "work/:id",
				element: <Work />,
				loader: async () => {
					return { 
						data: {
							services: [
								'service1',
								'service2',
								'service3',
								'service4',
							],
							description: "Description blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
							images: [
								{ img: "https://picsum.photos/2700/1201", alt: '', key: 1 },
								{ img: "https://picsum.photos/2700/1202", alt: '', key: 2 },
								{ img: "https://picsum.photos/2700/1203", alt: '', key: 3 },
								{ img: "https://picsum.photos/2700/1205", alt: '', key: 4 },
								{ img: "https://picsum.photos/2700/1207", alt: '', key: 5 },
								{ img: "https://picsum.photos/2700/1209", alt: '', key: 6 },
								{ img: "https://picsum.photos/2700/1213", alt: '', key: 7 },
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
