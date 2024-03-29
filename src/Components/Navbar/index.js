import { useRouter } from 'next/router';
import ReactGA from 'react-ga';
import Paths from '../../AppRouter/Paths';
import styles from './navbar.module.scss';

const Navbar = () => {
    // Settings
    const nextRouter = useRouter();

    const handleOnClick = (evt) => {
        evt.preventDefault();
        const el = document.createElement('a');
        el.href = evt.target.href;
        ReactGA.set({ page: el.pathname });
        ReactGA.pageview(el.pathname);
        if (el.pathname === '/undefined') nextRouter.push(Paths.home);
        else nextRouter.push(el.pathname);
    }

    // Handle returning class name including which one is active
    const handleClassName = (currentPath) => {
        if (nextRouter.pathname === '/' && currentPath === Paths.jsonPath) return `nav-link mx-2 ${styles.active} active`;
        else return `nav-link mx-2 ${nextRouter.pathname === currentPath ? `${styles.active} active` : ''}`;
    }

    return (
        <div>
            <nav className={`${styles.navbar} navbar fixed-top navbar-expand-sm navbar-light`}>
                <div className='container-fluid'>
                    <a className='navbar-brand mx-5' onClick={handleOnClick} href={Paths.home}>
                        <img src="/images/jtp-logo.png" alt="jsontoolsplus" height="36" className="d-inline-block align-text-top" />
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <div className='me-auto'></div>
                        <div className='d-flex'>
                            <div className='navbar-nav'>
                                <a className={handleClassName(Paths.jsonPath)} onClick={handleOnClick} href={Paths.jsonPath}>Path Evaluator</a>
                                <a className={handleClassName(Paths.schemaValidator)} onClick={handleOnClick} href={Paths.schemaValidator}>Schema Validator</a>
                                <a className={handleClassName(Paths.schemaGenerator)} onClick={handleOnClick} href={Paths.schemaGenerator}>Schema Generator</a>
                                <a className={handleClassName(Paths.jsonBeautify)} onClick={handleOnClick} href={Paths.jsonBeautify}>Beautify</a>
                                <a className={handleClassName(Paths.jsonMinify)} onClick={handleOnClick} href={Paths.jsonMinify}>Minify</a>
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
