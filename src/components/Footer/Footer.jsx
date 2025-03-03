import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <h3 className={styles.head}>Social Links</h3>
        <div className={styles.body}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
