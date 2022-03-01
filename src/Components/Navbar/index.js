import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paths from '../../AppRouter/Paths';
import './navbar.scss';

const Navbar = () => {
    // Settings
    const navigate = useNavigate();

    // Handle active state
    const [active, setActive] = useState(Paths.jsonPath);

    const handleOnClick = (evt, navigateTo) => {
        evt.preventDefault();
        setActive(navigateTo);
        navigate(navigateTo);
    }

    // Handle returning class name including which one is active
    const handleClassName = (currentPath) => {
        return `nav-link mx-2 ${active === currentPath ? 'active' : ''}`;
    }

    return (
        <div>
            <nav className='navbar fixed-top navbar-expand-sm navbar-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand mx-5' onClick={(evt) => handleOnClick(evt, Paths.jsonPath)} href='/'>
                        <img src="../images/jtp-logo.png" alt="jsontoolsplus" height="36" className="d-inline-block align-text-top" />
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <div className='me-auto'></div>
                        <div className='d-flex'>
                            <div className='navbar-nav'>
                                <a className={handleClassName(Paths.jsonPath)} onClick={(evt) => handleOnClick(evt, Paths.jsonPath)} href={Paths.jsonPath}>Path Evaluator</a>
                                <a className={handleClassName(Paths.schemaValidator)} onClick={(evt) => handleOnClick(evt, Paths.schemaValidator)} href={Paths.schemaValidator}>Schema Validator</a>
                                <a className={handleClassName(Paths.schemaGenerator)} onClick={(evt) => handleOnClick(evt, Paths.schemaGenerator)} href={Paths.schemaGenerator}>Schema Generator</a>
                                <a className={handleClassName(Paths.jsonBeautify)} onClick={(evt) => handleOnClick(evt, Paths.jsonBeautify)} href={Paths.jsonPath}>Beautify</a>
                                <a className={handleClassName()} href='https://github.com/aalzubidy/jsontoolsplus' target='_blank' rel='noreferrer'>Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
