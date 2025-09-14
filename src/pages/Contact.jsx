import infoData from '../assets/info.json';

function Contact(){
    let sectionClass = "flex flex-col xl:flex-row xl:justify-between xl:!p-12 text-3xl";
    let subClass = "flex gap-4 items-center justify-center text-2xl";

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    return(
        <div className="space-y-4">
            <section className={sectionClass}>
                <p><strong>Email Address</strong></p>
                <div className={subClass}>
                    <button className="contact-button xl:!text-lg" onClick={() => window.open('mailto:' + infoData.email, '_blank', 'noopener,noreferrer')}>
                        Email
                    </button>
                    <p>{infoData.email}</p>
                </div>
            </section>
            <section className={sectionClass}>
                <p><strong>Phone Number</strong></p>
                <div className={subClass}>
                    <button className="contact-button xl:!text-lg" onClick={() => handleCopy(infoData.mobile)}>Copy</button>
                    <p>{infoData.mobile}</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;