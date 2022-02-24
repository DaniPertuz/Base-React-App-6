import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../logo.png';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React Logo' width={150} />
                        <ul>
                            <li>
                                <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path='about' element={<h1>About page</h1>} />
                        <Route path='users' element={<h1>Users page</h1>} />
                        <Route path='/shopping' element={<ShoppingPage />} />

                        <Route path='/*' element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
                <Routes></Routes>
            </BrowserRouter>
        </>
    );
}

export default Navigation;