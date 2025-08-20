import infoData from '../assets/info.json';

function Contact(){
    let sectionClass = "flex justify-between !p-12 text-3xl";

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    return(
        <div className="space-y-4">
            <section className={sectionClass}>
                <p><strong>Email Address</strong></p>
                <div className="flex gap-4">
                    <button className="contact-button" onClick={() => window.open('mailto:' + infoData.email, '_blank', 'noopener,noreferrer')}>
                        Email
                    </button>
                    <p>{infoData.email}</p>
                </div>
            </section>
            <section className={sectionClass}>
                <p><strong>Phone Number</strong></p>
                <div className="flex gap-4">
                    <button className="contact-button" onClick={() => handleCopy(infoData.mobile)}>Copy</button>
                    <p>{infoData.mobile}</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;