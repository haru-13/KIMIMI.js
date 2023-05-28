import Container from "components/container.js";
import ImageLogo from "components/image-logo.js";
import Social from "components/social.js";
import styles from "src/styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <ImageLogo />
                    <Social />
                </div>
            </Container>
        </footer>
    );
}