import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Store from './Slices/Store.jsx';
import {Provider} from 'react-redux'
import Home from './Home.jsx';
import toast, { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
           <Provider store={Store}>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <Home />
                <main style={{paddingTop : '100px'}}>
                    <Outlet/>
                </main>
           </Provider>
        </>
    );
}

export default App
