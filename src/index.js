// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewapi from './Viewapi';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Counters from './Counters';
// import Memohook from './Memohook';
// import Bootstrap from './Bootstrap';
// import Component1 from './Component1';
// import Map from './Map';
import Insertapi from './Insertapi';
import Updateapi from './Updateapi';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Viewapi />} />
                <Route path="/insert" element={<Insertapi />} />
                <Route path="//update/:id" element={<Updateapi />} />
             </Routes>
        </BrowserRouter>

    </>
);

