import SuperContainer from '../components/SuperContainer';

export default function Home() {
    return (
    <SuperContainer>
        <div className="max-w-6xl mx-auto flex flex-row py-20">
            <div className="flex flex-col text-6xl text-slate-600">
                <h1>Page</h1>
                <h1>Under</h1>
                <h1>Construction</h1>
            </div>
        </div>
    </SuperContainer>
    );
}
