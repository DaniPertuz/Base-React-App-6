import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../logo.png';
import { routes } from './routes';

const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React Logo' width={150} />
                        <ul>
                            {
                                routes.map(({ path, name }) => (
                                    <li key={path}>
                                        <NavLink to={path} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ to, path, Component }) => (
                                <Route path={path} element={<Component />} key={to} />
                            ))
                        }

                        <Route path='/*' element={<Navigate replace to={routes[0].to} />} />
                    </Routes>
                </div>
                <Routes></Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Navigation;