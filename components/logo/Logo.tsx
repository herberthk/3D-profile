import styles from "./logo.module.scss";
const Logo = () => (
  <div
    tabIndex={0}
    onKeyDown={() => {}}
    role="button"
    onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
    className={styles.logo}>
    <h1>
      <span>HERBERT</span>
    </h1>
  </div>
);

export default Logo;
