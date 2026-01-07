import infoData from '../assets/info.json';

function Home(){
    let tab = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
    
    return(
        <div className="space-y-4">
            <section id="about">
                <h1 className="section-header">About</h1>
                <div className="flex gap-4 flex-col xl:flex-row">
                    <img className="block xl:w-2/5" src="/images/profile.png" alt="profile" />
                    <p className="w-full xl:w-3/5 text-start">{infoData.about}</p>
                </div>
            </section>
            <section id="mission">
                <h1 className="section-header">Mission Statement</h1>
                <div className="flex gap-4 flex-col xl:flex-row">
                    <p className="w-full xl:w-3/5 text-start">{infoData.mission}</p>
                    <img className="block xl:w-2/5" src="/images/me-but-twelve.png" alt="profile" />
                </div>
            </section>
            <section id="answers">
                <h1 className="section-header">Questions & Answers</h1>
                <div className="xl:grid xl:grid-cols-2 gap-4">
                    {infoData.questions.map((item, idx) => (
                        <div key={idx} className="shadow-md p-4">
                            <p className="mb-2"><strong>{item.question}</strong></p>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;