import { eyecatchLocal } from "../../lib/constants";
import { getAllPosts } from "../../lib/api";
import { getPlaiceholder } from "plaiceholder";
import Container from "/components/container.js";
import Hero from "/components/hero.js";
import Meta from "/components/meta.js";
import Posts from "/components/posts";
import Pagination from "../../components/pagination";



export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="KIMIMI"
        subtitle="import used clothes from US"
        imageOn
      />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More" />

    </Container>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts(4)

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
