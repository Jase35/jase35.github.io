import { useParams } from 'react-router-dom';
import experienceData from '../assets/experience.json';

function ProjectDetail(){
    const { id } = useParams();
    const projects = experienceData.projects;
    const project = projects.find((p, idx) => String(idx) === id);

    if (!project) return <div>Project not found</div>;

    return(
        <section className="flex flex-col xl:flex-row justify-between gap-4">
            <div className="w-auto xl:w-3/5">
                <h1 className="section-header texl-xl xl:!text-3xl !mb-2">{project.title}</h1>
                <div className="flex gap-2 justify-between text-xl">
                    <div className="flex gap-2 mb-4">
                        {project.technologies.map((item, idx) => (
                            <p className="technology-tag !text-xs xl:!text-lg" key={idx}>{item}</p>
                        ))}
                    </div>
                    <p className="!text-xs xl:!text-lg">{project.date}</p>
                </div>
                <div className="flex justify-start text-start">
                    <p>{project.description}</p>
                </div>
            </div>
            <div className="w-auto xl:w-2/5">
                {project.images.map((item, idx) => (
                    <div>
                        {idx > 0 && (
                            <div className="mt-4"/>
                        )}
                        <div key={idx} className="p-2 bg-black/15 shadow-md">
                            <img src={`/images/${item.source}`} alt={item.description} />
                            <p className="mt-2">Figure {parseInt(id, 10) + 1}.{idx + 1}: {item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectDetail;