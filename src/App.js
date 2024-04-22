import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import AppHeader from './components/AppHeader.js';

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <ScrollRestoration></ScrollRestoration>
            <main className="content">
                <Outlet/>
            </main>

        </div>
    );
}


export default App;
