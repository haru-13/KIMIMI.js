import style from "src/styles/contact.module.css";
import Social from "components/social.js";

export default function Contact() {
    return (
        <div className={style.stack}>
            <h3 className={style.heading}>Contact</h3>
            <Social />
            <address>kimimi.import.clothes@gmail.com</address>
        </div>
    );
}
