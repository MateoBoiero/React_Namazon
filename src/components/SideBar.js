import React from 'react';
import image from '../assets/images/lognama.png';
import {Route,Link,/* Switch */ Routes} from 'react-router-dom';

import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentWrapper from './ContentWrapper';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';

function SideBar(){
    return(

        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                {<li className="nav-item active">
                    <Link className="nav-link" to="/">
                        {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
                        <span>Inicio</span></Link>
                </li>}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                {/* <div className="sidebar-heading">Actions</div> */}

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Generos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Pelicula</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Contenido</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route exat path='/' element= {<ContentWrapper/>} />
                <Route  path='/GenresInDb' element = {<GenresInDb/>} />
                <Route path='/LastMovieInDb'  element={<LastMovieInDb/>} />
                <Route  path='/ContentRowMovies' element= {<ContentRowMovies/>} />
                <Route  path='*' element={<Error404/>}/>
            </Routes>

        </React.Fragment>
    )
}
export default SideBar;