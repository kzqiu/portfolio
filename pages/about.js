import SuperContainer from "../components/supercontainer";

export default function About() {
    return (
        <SuperContainer>
            <section className="bg-gray-800">
                <div className="max-w-6xl mx-auto px-4 h-48">
                    <h1 className="text-5xl md:text-9xl font-bold py-20 text-white text-center md:text-left">About me!</h1>
                </div>
                <div className="bg-gray-900 -mt-10 min-h-screen">
                    <div className="text-container max-w-6xl mx-auto px-4 pt-32">
                        <div className="leading-loose text-2xl font-normal text-slate-300 my">
                            <p>Hey, Nice to meet you! I'm Kevin!</p>
                            <p>Currently, I'm an undergraduate student at Columbia University majoring in Computer Engineering.</p>
                        </div>
                    </div>
                </div>
            </section>
        </SuperContainer>
    );
}