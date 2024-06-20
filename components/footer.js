import Styles from '../styles/footer.module.css';

export default function footer() {
  return (
    <div className={Styles.container}>
      <footer className={Styles.footer}>
        <p>&copy; 2024 Xavier Chen</p>
      </footer>
  </div>
  );
}