import Container from "components/container.js";
import Logo from "components/logo.js";
import Nav from "components/nav.js";
import styles from "src/styles/header.module.css";


export default function Header() {
    return (
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    );
}