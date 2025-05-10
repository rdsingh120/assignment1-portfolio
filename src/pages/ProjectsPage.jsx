import Container from '../components/Container'
import Project from '../components/Project'
import Title from '../components/Title'

const ProjectsPage = () => {
  return (
    <Container>
      <span className="text-center">
        <Title text="Projects" />
      </span>

      <div className="projects-container">
        <Project />
      </div>
    </Container>
  )
}
export default ProjectsPage
