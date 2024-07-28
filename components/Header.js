import Link from 'next/link';
import styles from '../styles/theme.module.css'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}