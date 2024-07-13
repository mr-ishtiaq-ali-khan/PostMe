import Card from "../components/card/Card";

function Home() {

    return (
        <div className="container">
            <Card title="Post 1" body="Sample post 1 body content ......" onClose={function (): void {} }  />
        </div>
    );
}

export default Home;