import { useParams } from 'react-router-dom';
import experienceData from '../assets/experience.json';

function ProjectDetail(){
    const { id } = useParams();
    const projects = experienceData.projects;
    const project = projects.find((p, idx) => String(idx) === id);

    if (!project) return <div>Project not found</div>;

    return(
        <section className="flex justify-between gap-4">
            <div className="w-3/5">
                <h1 className="section-header !text-3xl !mb-2">{project.title}</h1>
                <div className="flex gap-2 justify-between text-xl">
                    <div className="flex gap-2 mb-4">
                        {project.technologies.map((item, idx) => (
                            <p className="technology-tag" key={idx}>{item}</p>
                        ))}
                    </div>
                    <p>{project.date}</p>
                </div>
                <div className="flex justify-start">
                    <p>{project.description}</p>
                </div>
            </div>
            <div className="w-2/5">
                {project.images.map((item, idx) => (
                    <div key={idx} className="p-2 bg-stone-200 shadow-md">
                        <img src={`/images/${item.source}`} alt={item.description} />
                        <p className="mt-2">Figure {parseInt(id, 10) + 1}.{idx + 1}: {item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectDetail;