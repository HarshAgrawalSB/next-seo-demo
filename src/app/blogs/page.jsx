import Link from "next/link";

async function page() {

    const url = 'https://dummy-json.mock.beeceptor.com/posts';
    const options = {
        method: 'GET',
    };

    const data = await fetch(url, options)
    const blogs = await data.json()



    return (
        <div className="m-2 flex items-center justify-start flex-wrap ">
            <h1>All Blogs</h1>
            {
                blogs?.map((item) => (
                    <Link href={`/blogs/${item?.id}`} key={item.id} className=" bg-white shadow-gray-400 shadow-lg mx-2 my-2">
                        <h2>{item.title}</h2>
                        <h3>{item.link}</h3>
                        <p className="text-wrap w-[60%]">{item.body}</p>

                    </Link>
                ))
            }
        </div>
    );
}

export default page;

export async function generateMetadata({ params }) {
    return {
        title: 'Popular Blogging Site',
        description: "Read & upload blogs",
        metadataBase: new URL('https://grackle-renewed-mallard.ngrok-free.app'),
        alternates: {
            canonical: '/',
        }
    }
}