import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import AppHeader from './components/AppHeader.js';

function App() {
    return (
        <div className="App">

            <AppHeader></AppHeader>
            <main className="content">
                <Outlet/>
                <ScrollRestoration/>
            </main>

        </div>
    );
}


export default App;
