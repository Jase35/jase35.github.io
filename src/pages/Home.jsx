import infoData from '../assets/info.json';

function Home(){
    let tab = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

    /*<section id="about">
                <h1 className="section-header">About</h1>
                <div className="flex gap-4">
                    <img className="w-2/5" src="/images/friley-frights.png" alt="profile" />
                    <p className="w-3/5 text-start">{infoData.about}</p>
                </div>
            </section>*/
    
    return(
        <div className="space-y-4">
            <section id="about">
                <h1 className="section-header">About</h1>
                <div className="flex gap-4">
                    <img className="hidden xl:block w-2/5" src="/images/face.png" alt="profile" />
                    <p className="w-3/5 text-start">{infoData.about}</p>
                </div>
            </section>
            <section id="mission">
                <h1 className="section-header">Mission Statement</h1>
                <div className="flex gap-4">
                    <p className="w-3/5 text-start">{infoData.mission}</p>
                    <img className="hidden xl:block w-2/5" src="/images/friley-frights.png" alt="profile" />
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