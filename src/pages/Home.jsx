function Home(){
    let tab = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
    
    return(
        <div className="space-y-4">
            <section id="about">
                <h1 className="section-header">About</h1>
                <div className="flex gap-4">
                    <img className="w-2/5" src="/images/friley-frights.png" alt="profile" />
                    <p className="w-3/5 text-start">{tab}I am currently persuing a Bachelor of Science degree in Software Engineering at Iowa State University, residing in Ames Iowa. I have years of experience programming even far prior to attending university.</p>
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
                <div className="flex justify-between">
                    <p>Would you be willing to relocate?</p>
                    <p>Yes; it wouldn't be an issue.</p>
                </div>
                <div className="flex justify-between">
                    <p>Would you be able to do a mixture of physical work as well?</p>
                    <p>Yes; I am in excellent health with particularly strong endurance.</p>
                </div>
            </section>
            <section>
                <h1 className="section-header">Miscellaneous</h1>
                <p>{tab}I like to constantly be working on stuff. If I'm ever unoccupied with school or work at the moment, I will work on coding projects, compose music, or any sort of random thing.</p>
            </section>
        </div>
    );
}

export default Home;