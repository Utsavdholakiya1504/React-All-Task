import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Counters from './Counters';
// import Memohook from './Memohook';
// import Bootstrap from './Bootstrap';
// import Component1 from './Component1';
// import Map from './Map';
import Viewapi from './Viewapi';
import Insertapi from './Insertapi';
import Updateapi from './Updateapi';
import Login from './Login';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/view" element={<Viewapi />} />
                <Route path="/insert" element={<Insertapi />} />
                <Route path="//update/:id" element={<Updateapi />} />
              </Routes>
        </BrowserRouter>

    </>
);

