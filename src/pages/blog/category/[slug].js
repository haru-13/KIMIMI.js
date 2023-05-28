import { getAllCategories,getAllPostsByCategory } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import { getPlaiceholder } from "plaiceholder";
import Posts from "/components/posts";
import Meta from "/components/meta";



import { eyecatchLocal } from "lib/constants";

export default function Category({ name, posts }) {
    return (
        <Container>
            <Meta pageTitele={name} pageDesc={`${name}`}/>
            <PostHeader title={name} subtitle="Category" />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCats=await getAllCategories()
    const paths = allCats.map((category) => ({
        params: { slug: category.slug }, // Use the correct property name for the slug
      }));
    return {
        paths, 
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const catSlug = context.params.slug
    
    const allCats = await getAllCategories()
    const cat = allCats.find(({ slug }) => slug === catSlug)

    const posts = await getAllPostsByCategory(cat.id)

    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }
    
    return{
        props:{
            name: cat.name,
            posts:posts,
        },
    }
}