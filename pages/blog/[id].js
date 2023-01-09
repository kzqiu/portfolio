import SuperContainer from "../../components/supercontainer";
import { getAllPostIds, getPostData } from "../../components/posts";

export default function Blogpost({ postData }) {
    return (
        <SuperContainer>
            <section className="bg-gray-800">
            <div className="flex flex-row max-w-6xl px-4 mx-auto py-20">
                <div className="flex flex-col space-y-10">
                    <div className="text-4xl md:text-4xl font-semibold text-white md:text-left font-mono h-20">
                        { postData.title }
                    </div>
                    <div className="text-lg font-normal text-slate-300 md:text-left font-mono">
                        { postData.contentHtml }
                    </div>
                </div>
            </div>
            </section>
        </SuperContainer>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}