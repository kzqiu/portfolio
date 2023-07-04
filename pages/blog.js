import SuperContainer from "../components/supercontainer";
import { getPostsData } from "../components/posts";
import Link from "next/link";

export async function getStaticProps() {
    const allPostsData = JSON.parse(JSON.stringify(getPostsData())).map((post) => {
        return {
            "id": post.id,
            "title": post.title,
            "date": post.date.substring(0, 10),
        }
    });

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    return (
        <SuperContainer>
            <section className="bg-gray-800">
                <div className="flex flex-row max-w-6xl px-4 mx-auto py-20">
                    <div className="flex flex-col space-y-10">
                        <div className="text-4xl md:text-4xl font-semibold text-white md:text-left font-mono h-20">blog</div>
                        
                        {allPostsData.map(({ id, date, title }) => (
                            <div className="text-slate-300 md:text-left font-mono" key={id}>
                                <p className="font-bold font-xl hover:text-gray-500"><Link href={`/blog/${id}`}>{title}</Link></p>
                                {date}
                                
                            </div>
                        ))}
                        
                    </div>
                </div>
            </section>
        </SuperContainer>
    );
}