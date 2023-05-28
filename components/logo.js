import Link from "next/link";
import styles from "src/styles/logo.module.css";
export default function Logo() {
    return (
        <Link className={styles.box }  href="/">
            KIMIMI
        </Link>
    );
}