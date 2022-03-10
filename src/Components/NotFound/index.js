import { Helmet } from 'react-helmet';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className='container-fluid notFoundContainer'>
      <Helmet>
        <title>JSON Tools Plus - Page Not Found 404</title>
        <meta name="pagename" content="JSON Tools Plus - Page Not Found 404" />
        <meta name="subject" content="JSON Tools Plus - Page Not Found 404" />
      </Helmet>

      <div className='notFoundBox'>
        <h1>I can't go for that page!</h1>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/ccenFp_3kq8' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default NotFound;
