import styles from './notFound.module.scss';

const NotFound = () => {
  return (
    <div className={`container-fluid ${styles.notFoundContainer}`}>
      <div className={`${styles.notFoundBox}`}>
        <h1>I can't go for that page, but here is a song instead!</h1>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/ccenFp_3kq8' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default NotFound;
