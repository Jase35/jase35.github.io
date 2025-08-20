import infoData from '../assets/info.json';

function Home(){
    let tab = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
    
    return(
        <div className="space-y-4">
            <section id="about">
                <h1 className="section-header">About</h1>
                <div className="flex gap-4">
                    <img className="w-2/5" src="/images/friley-frights.png" alt="profile" />
                    <p className="w-3/5 text-start">{infoData.about}</p>
                </div>
            </section>
            <section id="mission">
                <h1 className="section-header">Mission Statement</h1>
                <div className="flex gap-4">
                    <div className="w-3/5 text-start">
                        <p>{tab}Industriousness is the axiom of my work ethic. From this stems convictions for excellency.</p>
                        <p>{tab}I strive to maximize the higher productivity of labor within any group dynamic, asking for the personal agency of each and every member.</p>
                        <p>{tab}Time is of great value to me, so I make the most of it. I reject the notion that quality and speed are entirely mutually exclusive. I maintain high quality of work with reverence to time constraints.</p>
                    </div>
                    <img className="w-2/5" src="/images/friley-frights.png" alt="profile" />
                </div>
            </section>
            <section id="answers">
                <h1 className="section-header">Questions & Answers</h1>
                <div className="grid grid-cols-2 gap-4">
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