import SuperContainer from '../components/supercontainer';

export default function Home() {
    return (
    <SuperContainer>
        <div className="flex flex-row max-w-6xl mx-auto py-20">
            <div className="flex flex-col text-6xl text-slate-600">
                <h1>Page</h1>
                <h1>Under</h1>
                <h1>Construction</h1>
            </div>
        </div>
    </SuperContainer>
    );
}
