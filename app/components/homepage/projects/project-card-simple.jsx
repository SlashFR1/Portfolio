import { FaCode, FaPlay } from 'react-icons/fa';

export default function ProjectCardSimple({ project }) {
  return (
    <div className="carousel-item">
      {/* Header */}
      <div className="carousel-item-header">
        <div className="browser-dot red"></div>
        <div className="browser-dot yellow"></div>
        <div className="browser-dot green"></div>
        <div className="project-title">{project.name}</div>
      </div>

      {/* Body */}
      <div className="carousel-item-body">
        <div className="project-role">{project.role}</div>
        <p className="project-description">{project.description}</p>
        
        {/* Technologies */}
        <div className="project-technologies">
          {project.tools?.slice(0, 3).map((tool, idx) => (
            <span key={idx} className="tech-tag">{tool}</span>
          ))}
          {project.tools?.length > 3 && (
            <span className="tech-tag">+{project.tools.length - 3}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="carousel-item-footer">
        {project.code && (
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            <FaCode size={14} />
            Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <FaPlay size={14} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
