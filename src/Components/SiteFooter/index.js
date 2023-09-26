import styles from './siteFooter.module.scss';

const SiteFooter = () => {
  return (
    <div className={`row ${styles.siteFooter} align-items-end justify-content-center`}>
      <p>A Website by <a href='http://www.aalzubidy.com' target='_blank' rel='noreferrer'>Ahmed Al-Zubidy</a></p>
    </div>
  )
}

export default SiteFooter;
