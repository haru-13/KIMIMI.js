import Link from "next/link"                // Importing the Link component from Next.js
import styles from "src/styles/post-categories.module.css"  // Importing CSS styles
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFolderOpen} from "@fortawesome/free-regular-svg-icons"


export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen}/>
            </h3>
            <ul className={styles.list}>
                {categories.map(({ name, slug }) => (
                    <li key={slug}>
                        <Link href={`/blog/category/${slug}`}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}