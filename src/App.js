import './App.css';
import { Outlet } from 'react-router-dom';
import AppHeader from './components/AppHeader.js';
import SiteTitle from './components/SiteTitle.js';
import SiteFooter from './components/SiteFooter.js';

function App() {
    return (
        <div className="App">

            <AppHeader></AppHeader>
            <SiteTitle></SiteTitle>
            <Outlet />
            <SiteFooter></SiteFooter>

        </div>
    );
}

export default App;
