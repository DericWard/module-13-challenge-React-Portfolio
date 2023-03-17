import './Home.css';

function Home() {
    return (
        <>
        <div className="home">
            <img src={require('../../assets/avatar3-modified.png')} alt="" />
        </div>
        <div>
            <h3 className='tagLine'>"Secure End-to-End Solutions"</h3>
        </div>
        </>
    );
};

export default Home;