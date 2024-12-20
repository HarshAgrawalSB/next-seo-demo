// 'use client'
// import DetailsPage from "@/components/blogs/DetailsPage";
// import { useParams } from "next/navigation";

export const revalidate = 30

export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateMetadata({ params }) {
    const { blogId } = await params;
    const res = await fetch(`https://dummy-json.mock.beeceptor.com/posts/${blogId}`);
    const blog = await res.json();

    return {
        title: blog?.title || 'Blog Post',
        description: blog?.body || 'Detailed blog content',
    };
}


export const generateStaticParams = async () => {
    const posts = await fetch('https://dummy-json.mock.beeceptor.com/posts').then((res) =>
        res.json()
    )

    return posts.map((post) => ({
        id: String(post.id),
    }))
}

async function page({ params }) {
    const { blogId } = await params;

    // const params = useParams()
    // console.log(blogId);

    const url = `https://dummy-json.mock.beeceptor.com/posts/${blogId}`;
    const options = {
        method: 'GET',
    };

    const result = await fetch(url, options)
    const data = await result.json()

    console.log(data);




    return (
        <>
            <div>DetailsPage</div>
            <h1>{data?.title}</h1>
            <p>id:{data?.id}</p>
            <h2>Comments:{data?.comment_count}</h2>
            <p>Description:{data?.body}</p>
        </>
    );
}

export default page;

