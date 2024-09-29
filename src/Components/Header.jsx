import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>BattlePokémon</div>
      <div className={styles.battle}>
        <button className={styles.btn}>Battle</button>
      </div>
    </div>
  );
}
