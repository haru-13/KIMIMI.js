import styles from "src/styles/image-hover.module.css"
import Image from "next/image";

export default function Imagehover({title,children}) {
    return (
        <div>
            <section className={styles.hover}>
                <div className={styles.hoverImg}>
                  {children}  
                </div>
                <div className={styles.hoverText}>
                    <p className={styles.text1}>{title}</p>
                    <p className={styles.text2}>Please click image</p>
                </div>
            </section>
        </div>
    );
}