// src/app/page.tsx
import Header from './components/Header'; // Import the Header component
import styles from './styles/Home.module.css'; // Import Home styles

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page where I showcase my skills and projects.</p>
      </main>
    </div>
  );
}
