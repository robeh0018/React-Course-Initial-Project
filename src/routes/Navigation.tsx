import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
// @ts-ignore
import reactLogo from '../assets/react.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';


export const Navigation = () => {

    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>

                    <img src={ reactLogo } alt='React Logo'/>

                    <ul>
                        <li>
                            <NavLink to='/home' className={ ( {isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={ ( {isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={ ( {isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>

                </nav>

                <Routes>
                    <Route path='about' element={ <h1>About Page</h1> }/>
                    <Route path='users' element={ <h1>Users Page</h1> }/>
                    <Route path='home' element={ <ShoppingPage /> }/>

                    <Route path='/*' element={ <Navigate replace to='/home'/> }/>
                </Routes>

            </div>
        </BrowserRouter>
    )
}