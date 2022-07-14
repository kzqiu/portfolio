import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

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
            <main className="w-full min-h-screen selection:bg-fuchsia-300 selection:text-fuchsia-900">
                <Navbar/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>  
    );
}