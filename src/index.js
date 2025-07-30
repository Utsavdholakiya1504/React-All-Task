import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Counters from './Counters';
// import Memohook from './Memohook';
// import Bootstrap from './Bootstrap';
// import Component1 from './Component1';
// import Map from './Map';
// import Viewapi from './Viewapi';
// import Insertapi from './Insertapi';
// import Updateapi from './Updateapi';
// import Login from './Login';
import Test from './Test';
import Reduxstore from './Reduxstore';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        {/* <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/view" element={<Viewapi />} />
                <Route path="/insert" element={<Insertapi />} />
                <Route path="//update/:id" element={<Updateapi />} />

                <Route path="/" element={< Test/>} ></Route>
            </Routes>
        </BrowserRouter>*/}

        {/* <Provider store={Reduxstore}>
            <Test/>
        </Provider>
         */}
        
        <Provider store={Reduxstore2}>
            <Test2/>
        </Provider>
    </>
);

