import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function SuperContainer({children}) {
    const meta = {
        title: "Kevin Zhongshi Qiu's Website",
        description: "",
        type: "website",
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="all" />
                <link rel="shortcut icon" href="/images/favicon.ico"/>
            </Head>
            <main className="w-full min-h-screen selection:bg-fuchsia-300 selection:text-fuchsia-900 bg-gray-800">
                <Navbar/>
                <div>{children}</div>
                {/* <Footer/> */}
            </main>
        </div>  
    );
}