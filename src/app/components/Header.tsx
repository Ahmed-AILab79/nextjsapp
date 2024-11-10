// src/app/components/Header.tsx
import Link from 'next/link'; // Import Link for navigation
import styles from "../styles/Header.module.css"; // Import the CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Welcome to My Portfolio</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
