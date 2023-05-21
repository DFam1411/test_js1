import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app-component/App';
import reportWebVitals from './reportWebVitals';
import {router} from "./constants/router";
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Navbar from "./components/navbar-component/Navbar";
import List from "./components/list-component/List";
import ErrorPage from "./components/error-component/ErrorPage";



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<App/>}>
                </Route>
                <Route path="/table" element={<List/>}>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
