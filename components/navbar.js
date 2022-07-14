import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter()
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
            <div className="flex justify-between items-center">
                <Link href="../">
                    <a>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-semibold text-slate-200 hover:text-gray-500">Kevin Qiu</h1>
                            <h1 className="text-lg font-semibold text-gray-500">Placeholder</h1>
                        </div>
                    </a>
                </Link>
                <div className="space-x-12 hidden md:block">
                    <Link href="../about">
                        <a className={`text-base text-slate-300 hover:text-gray-500 ${router.asPath === "/about" ? "font-bold" : "font-medium"}`}>About</a>
                    </Link>
                    <Link href="../projects">
                        <a className={`text-base text-slate-300 hover:text-gray-500 ${router.asPath === "/projects" ? "font-bold" : "font-medium"}`}>Projects</a>
                    </Link> 
                    <Link href="../contact">
                        <a className={`text-base text-slate-300 hover:text-gray-500 ${router.asPath === "/contact" ? "font-bold" : "font-medium"}`}>Contact</a>
                    </Link> 
                </div>
                <div className="space-x-8">
                    <a href="https://www.linkedin.com/in/kevinzqiu/">
                        <svg className="fill-slate-300 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            </div>
            <div className="space-x-8 block md:hidden mt-4">
                <Link href="../about">
                    <a className={`text-base text-slate-300 hover:text-gray-500 ${router.asPath === "/about" ? "font-bold" : "font-medium"}`}>About</a>
                </Link>
                <Link href="../projects">
                    <a className={`text-base text-slate-300 hover:text-gray-500 ${router.asPath === "/projects" ? "font-bold" : "font-medium"}`}>Projects</a>
                </Link> 
                <Link href="../contact">
                    <a className={`text-base text-slate-300 hover:text-gray-500 ${router.asPath === "/contact" ? "font-bold" : "font-medium"}`}>Contact</a>
                </Link> 
            </div>
        </div>
    );
}