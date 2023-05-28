import styles from "src/styles/social.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faInstagram,

} from "@fortawesome/free-brands-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"


import Link from "next/link";

export default function Social() {
    return (
        <div>
            <ul className={styles.list}>
                <li>
                    <Link href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} />

                        <span className="sr-only">Twitter</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://instagram.com/sh.anshan4975?igshid=OGQ5ZDc2ODk2ZA==">
                        <FontAwesomeIcon icon={faInstagram} />
                        <span className="sr-only">Instagram</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://paypayfleamarket.yahoo.co.jp/user/p54639982">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="sr-only">shop</span>
                    </Link>
                </li>
            </ul>
        </div>

    );
}