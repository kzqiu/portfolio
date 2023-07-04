import SuperContainer from '../components/supercontainer';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Home() {
    return (
        <SuperContainer>
            <section className="bg-gray-800">
                <div className="flex flex-row max-w-6xl px-4 mx-auto py-20">
                    <div className="flex flex-col space-y-10">
                        <div className="text-4xl md:text-4xl font-semibold text-white md:text-left font-mono h-20">
                            <TypeAnimation sequence={["Hey, nice to meet you!", 
                                                     10000, 
                                                     "你好，很高兴认识你！",
                                                     10000,
                                                     "¡Hola, encantado de conocerte!",
                                                     10000
                                                     ]} 
                                            wrapper="h1" 
                                            cursor={false} 
                                            repeat={Infinity}
                                            speed={20}/>
                        </div>

                        <div className="text-lg font-normal text-slate-300 md:text-left font-mono">
                            Hey! I&apos;m Kevin, currently an undergraduate student at Columbia University studying computer science and operations research. My current areas of interest are data science, machine learning, robotics, and systems, but I really enjoy challenging myself with new topics!
                        </div>

                        <div className="text-lg font-normal text-slate-300 md:text-left font-mono">
                            Feel free to reach out to me on LinkedIn!
                        </div>

                        {/* <div className="text-2xl md:text-2xl font-semibold text-white md:text-left font-mono">
                            What have I been working on lately?
                        </div>

                        <div className="text-lg font-normal text-slate-300 md:text-left font-mono">
                            Here&apos;s a sneak peek at my ray tracer written (almost completely) from scratch in Rust!
                        </div>

                        <div>
                            <Image src="/images/ray.png" width={400} height={225} alt="Ray traced world"/>
                        </div> */}
                    </div>
                </div>
            </section>
        </SuperContainer>
    );
}
