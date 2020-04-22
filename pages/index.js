import Link from "next/link";
import { Button } from "component-lib/Button";
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/another-page">
        <Button className={styles.button}>Another page</Button>
      </Link>
    </div>
  );
}

export default HomePage;
