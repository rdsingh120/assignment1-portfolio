import Container from '../components/Container'
import img from '../assets/img.jpg'
import { Link } from 'react-router-dom'
import HR from '../components/HR'
import Title from '../components/Title'

const AboutPage = () => {
  return (
    <Container>
      <span className="text-center">
        <Title text="About Me" />
      </span>
      <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
        <div className="img-container h-[340px] w-[250px]">
          <img
            src={img}
            alt="img"
            className="w-full h-full object-cover object-[100%] rounded shadow-md"
          />
        </div>
        <div className="max-w-xl max-w-[380px]">
          <p className="text-gray-800">
            Hello! My name is{' '}
            <span className="font-semibold">Ripudaman Singh</span>, and I’m
            currently a Software Engineering Technology student with a strong
            passion for building WebApps and solving complex problems. I enjoy
            working on full-stack projects, experimenting with new technologies,
            and constantly improving my skills in both development and
            problem-solving. Outside of coding, I’m dedicated to personal growth
            through reading, fitness, and continuous learning. I’m always open
            to new opportunities and collaborations that allow me to grow
            professionally and contribute meaningfully.
          </p>
        </div>
      </div>

      <HR />

      <Title text="Explore More" />
      <div className="flex flex-col">
        <Link
          className="hover:text-blue-500"
          to="https://drive.google.com/file/d/14JPvWKyw6PlN3ex2WQZYCYy6UqMz5rsg/view"
        >
          📄 Checkout My Resume
        </Link>
        <Link className="hover:text-blue-500" to="/projects">
          📂 Explore my projects
        </Link>
        <Link className="hover:text-blue-500" to="/contact">
          📫 Get in touch
        </Link>
        <Link className="hover:text-blue-500" to="/">
          🔙 Go back to Home
        </Link>
      </div>
    </Container>
  )
}
export default AboutPage
