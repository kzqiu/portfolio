import Head from "next/head";
import Navbar from "./navbar";

export default function SuperContainer({children}) {
    const meta = {
        title: "Kevin Qiu",
        description: "Student, programmer, and engineer.",
        type: "website",
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <link rel="shortcut icon" href="/images/favicon.ico"/>
            </Head>
            <main className="bg-gray-800 w-full">
                <Navbar/>
                <div>{children}</div>
            </main>
        </div>  
    );
}