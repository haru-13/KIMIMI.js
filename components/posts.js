import Image from "next/image";
import Link from "next/link"
import styles from "src/styles/posts.module.css"
import Imagehover from "./image-hover";



export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <figure>
                            <Imagehover title={title}>
                                <Image
                                    src={eyecatch.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    sizes="(min-width: 1152px) 576px,50vw"
                                    getPlaiceholder="blur"
                                    blurDataURL={eyecatch.blurDataURL}
                                />
                            </Imagehover>
                        </figure>
                        
                    </Link>
                </article>
            ))}

        </div>
    );
}