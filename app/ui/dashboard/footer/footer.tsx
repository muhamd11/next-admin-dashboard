import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        Developed By
        <Link
          className={styles.link}
          href="https://my-portfolio-three-chi-46.vercel.app/"
          target='_blank'
        >
          Muhamed
        </Link>
      </div>
      <div className={styles.text}> &copy; All Rights Reserved</div>
    </div>
  );
};

export default Footer;
