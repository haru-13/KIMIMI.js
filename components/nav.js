import { useState } from "react";
import Link from "next/link";
import styles from "src/styles/nav.module.css";



export default function Nav() {
    const [navIsOpen, SetNavIsOpen] = useState(false)
    const toggleNav = () => {
        SetNavIsOpen((prev) => !prev)
    }
    const closeNav = ()=>{
        SetNavIsOpen(false)
    }
    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
    
            <button className={styles.btn} onClick={toggleNav}></button>
            <button className="sr-only">MENU</button>

            <ul className={styles.list}>
                <li>
                    <Link href="/" onClick={closeNav}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" onClick={closeNav} >
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog" onClick={closeNav}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/faq" onClick={closeNav}>
                        FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    );
}