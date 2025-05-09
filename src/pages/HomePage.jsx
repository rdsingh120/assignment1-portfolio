import Container from "../components/Container"
import HR from "../components/HR"
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <Container>
      <div className="mt-5">
        <h1 className="text-xl font-semibold mb-5">
          Welcome to My Portfolio!
        </h1>
        <p className="text-gray-800">
          Thank you for stopping by. I’m thrilled to have you here! This space
          is a reflection of my journey, interests, and aspirations as a
          passionate learner and developer. Whether you're here to learn more
          about my background, explore my projects, or simply get inspired,
          you're in the right place.
        </p>

        <HR />

        <h1 className="text-xl font-semibold mb-5">Mission Statement</h1>
        <p className="text-gray-800">
          My mission is to continuously grow as a software engineer by embracing
          challenges, building impactful solutions, and sharing knowledge along
          the way. I strive to make technology more accessible and meaningful
          through every line of code I write.
        </p>

        <HR />

        <h1 className="text-xl font-semibold mb-5">Explore More</h1>
        <div className="flex flex-col">
          <Link className="hover:text-blue-500" to="/about">
            🔗 Learn more about me
          </Link>
          <Link className="hover:text-blue-500" to="/projects">
            📂 Explore my projects
          </Link>
          <Link className="hover:text-blue-500" to="/contact">
            📫 Get in touch
          </Link>
        </div>
      </div>
    </Container>
  )
}
export default HomePage