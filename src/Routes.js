import React from 'react';
import { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


const Private = ({Item}) => {
    const signed = false;
    return signed > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>

        <Fragment>
        <Routes>

            <Route  exact path="/home" element={<Private Item={Home } />}/>
            
            <Route path='/' element={ <Login /> }/>

        </Routes>
        </Fragment>

        </BrowserRouter> 
    );
}

export default RoutesApp; 