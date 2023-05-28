import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/image-logo.module.css";

export default function ImageLogo() {
  return (
    <figure className={styles.Image}>
      <Link href="/">
          <Image
            src="/logo-img.png"
            alt="Logo"
            width={156}
            height={56}
            objectFit="contain"
          />

      </Link>
    </figure>
  );
}
