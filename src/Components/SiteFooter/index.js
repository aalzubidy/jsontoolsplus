import styles from './siteFooter.module.scss';

const SiteFooter = () => {
  return (
    <div className={`row ${styles.siteFooter} align-items-end justify-content-center`}>
      <p>© 2021-2025 JSONToolsPlus. All rights reserved. Developed by <a href='http://www.getaasystems.com' target='_blank' rel='noreferrer'>AA Systems LLC.</a></p>
    </div>
  )
}

export default SiteFooter;
