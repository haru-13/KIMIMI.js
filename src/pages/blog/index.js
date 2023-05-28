import { getAllPosts } from "../../../lib/api";
import { eyecatchLocal } from "../../../lib/constants";
import Container from "/components/container.js";
import Posts from "/components/posts.js";
import Hero from "/components/hero.js";
import Meta from "/components/meta.js";
import { getPlaiceholder } from "plaiceholder";


export default function Blog({ posts }) {
    return (
        <Container>
            <Meta pageTitle="Blog" pageDesc="ブログの記事一覧" />
            <Hero title="Blog"
                subtitle="Rrcent Props"
            />
            <Posts posts={posts} />
        </Container>
    );
}
export async function getStaticProps() {
    const posts = await getAllPosts()

    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }
    return {
        props: {
            posts: posts,
        },
    }


}
