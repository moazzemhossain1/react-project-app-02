import React from 'react';
import Naveber from './naveber/Naveber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Naveber></Naveber>
            <Outlet>

            </Outlet>
            
        </div>
    );
};

export default Root;