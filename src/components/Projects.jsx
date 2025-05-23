import Project from '../components/Project'
import Title from '../components/Title'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <>
      <span className="text-center">
        <Title text="Projects" />
      </span>

      <div className="flex flex-wrap gap-5 justify-center">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </>
  )
}
export default Projects

// File Name: Projects.jsx
// Name: Ripudaman Singh 
// Student Number: 301371452
// Date: May 23, 2024