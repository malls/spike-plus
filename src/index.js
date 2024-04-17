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

					return {
						data: [
							{
								url: '/videos/FFM_Animation_1.5.mp4',
								id: 0,
								client: 'Frames For Memory',
								mediaType: 'video',
	
							},
							{
								url: '/videos/RalphLauren_2SH_2.mp4',
								id: 1,
								client: 'Ralph Lauren Polo',
								mediaType: 'video',
	
							},
							{
								url: '/videos/SpikeHibb-Portf01-02_RagBoneFW16-edit-210412-v02.mp4',
								id: 2,
								client: 'Rag & Bone',
								mediaType: 'video',
	
							},
							{
								url: '/videos/SpikeHibb-Portf01-NilLotaVid01-edit-210413-v04.mp4',
								id: 3,
								client: 'Nili Lotan',
								mediaType: 'video',
	
							},
							{
								url: '/videos/TM.mp4',
								id: 4,
								client: 'Laura Mercier',
								mediaType: 'video',
	
							},
							{
								url: '/videos/Vince_HolidayVideo_Photoshop_1.mp4',
								id: 5,
								client: 'Vince',
								mediaType: 'video',
	
							}
						]
					}
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
					return { 
						data: {
							id: params.id,
							client: 'Ralph Lauren Polo',
							next: {
								client: 'Rag & Bone',
								id: '12345'
							},
							projects: [
								{
									services: [
										'service1',
										'service2',
										'service3',
										'service4',
									],
									title: 'Spring 2023',
									description: 'Description blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahDescription blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahDescription blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahDescription blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahDescription blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
									content: [
		
										{ url: '/vince/VinceHoliday_Video_2.mp4', alt: '', title: 'title', photographer: '', type: 'video'},
										{ url: '/vince/Holiday2024_1.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_2.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_3.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_4.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_5.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_6.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_7.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_8.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_9.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/df67fb09-a602-4dd1-966f-e27623f76aab (1).mp4' , alt: '', title: 'title', photographer: '', type: 'video'},
										{ url: '/vince/f2fbb8b4-940c-4b6c-9b7e-47cec6094ce4 (1).mp4', alt: '', title: 'title', photographer: '', type: 'video'},
									]
								},
								{
								services: [
										'service1',
										'service2',
										'service3',
										'service4',
									],
									description: 'Chenged this to polo so the title looks longer',
									title: 'Holiday 2024',

									content: [
		
										{ url: '/vince/VinceHoliday_Video_2.mp4', alt: '', title: 'title', photographer: '', type: 'video'},
										{ url: '/vince/Holiday2024_1.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_2.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_3.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_4.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_5.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_6.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_7.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_8.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/Holiday2024_9.1.jpg', alt: '', title: 'title', photographer: '', type: 'image'},
										{ url: '/vince/df67fb09-a602-4dd1-966f-e27623f76aab (1).mp4' , alt: '', title: 'title', photographer: '', type: 'video'},
										{ url: '/vince/f2fbb8b4-940c-4b6c-9b7e-47cec6094ce4 (1).mp4', alt: '', title: 'title', photographer: '', type: 'video'},
									]
								}
							]

						}
					}
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
