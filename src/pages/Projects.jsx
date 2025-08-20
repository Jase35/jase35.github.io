import experienceData from '../assets/experience.json';
import { NavLink } from 'react-router-dom';

function Projects(){
    return(
        <div className="space-y-4">
            <section id="projects">
                <h1 className="section-header">Projects</h1>
                <p className="mb-4">Click any card for additional information.</p>
                <div className="grid grid-cols-2 gap-4">
                    {experienceData.projects.map((item, idx) => (
                        <NavLink to={`/project/${idx}`} key={idx} className="project-card !shadow-md !p-3 !rounded-none">
                            <div className="relative">
                                <h3 className="z-10 absolute left-2 top-1 text-3xl text-white">{item.title}</h3>
                                <div className="absolute top-0 left-0 w-full h-1/4 pointer-events-none"
                                style={{
                                    background: "linear-gradient(to bottom, black, transparent)"
                                }} />
                                <div className="absolute bottom-0 left-0 w-full h-1/4 pointer-events-none"
                                style={{
                                    background: "linear-gradient(to top, black, transparent)"
                                }} />
                                <img src={`/images/${item.images[0].source}`} alt={item.title}/>
                                <div className="absolute text-xl bottom-2 left-2 flex gap-2">
                                    {item.technologies.map((tech, techIdx) => (
                                        <p className="technology-tag" key={techIdx}>{tech}</p>
                                    ))}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>

            <section id="education">
                <h1 className="section-header">Education</h1>
                {experienceData.education.map((item, idx) => (
                    <div key={idx}>
                        {idx > 0 && (
                            <hr className="mt-2 mb-2 border-dashed"/>
                        )}
                        <div className="flex justify-between">
                            <div className="text-start">
                                <h3><strong>{item.school}</strong></h3>
                                <p>{item.certificate}</p>
                            </div>
                            <p>{item.graduation}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section id="employment">
                <h1 className="section-header">Employment</h1>
                {experienceData.employment.map((item, idx) => (
                    <div key={idx}>
                        {idx > 0 && (
                            <hr className="mt-2 mb-2 border-dashed"/>
                        )}
                        <div>
                            <div className="flex justify-between">
                                <h3><strong>{item.title}</strong> - {item.company} at {item.location}</h3>
                                <p>{item.date}</p>
                            </div>
                            <div className="text-start">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section id="extracurriculars">
                <h1 className="section-header">Extracurriculars</h1>
                {experienceData.extracurriculars.map((item, idx) => (
                    <div key={idx}>
                        {idx > 0 && (
                            <hr className="mt-2 mb-2 border-dashed"/>
                        )}
                        <div>
                            <div className="flex justify-between">
                                <h3><strong>{item.activity}</strong></h3>
                                <p>{item.date}</p>
                            </div>
                            <div className="text-start">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Projects;