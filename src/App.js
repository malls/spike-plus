import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import AppHeader from './components/AppHeader.js';
import SiteTitle from './components/SiteTitle.js';

function App() {
    return (
        <div className="App">

            <AppHeader></AppHeader>
            <SiteTitle></SiteTitle>
            <main className="content">
                <Outlet/>
                <ScrollRestoration/>
            </main>

        </div>
    );
}


export default App;
