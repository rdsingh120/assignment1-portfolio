import Container from '../components/Container'
import HR from '../components/HR'
import { Link } from 'react-router-dom'
import Title from '../components/Title'

const HomePage = () => {
  return (
    <Container>
      <div className="mt-5">
        <Title text="Welcome to My Portfolio!" />
        <p className="text-gray-800">
          Thank you for stopping by. I’m thrilled to have you here! This space
          is a reflection of my journey, interests, and aspirations as a
          passionate learner and developer. Whether you're here to learn more
          about my background, explore my projects, or simply get inspired,
          you're in the right place.
        </p>

        <HR />

        <Title text="Mission Statement" />
        <p className="text-gray-800">
          My mission is to continuously grow as a software engineer by embracing
          challenges, building impactful solutions, and sharing knowledge along
          the way. I strive to make technology more accessible and meaningful
          through every line of code I write.
        </p>

        <HR />

        <Title text="Explore More" />
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

// File Name: HomePage.jsx
// Name: Ripudaman Singh 
// Student Number: 301371452
// Date: May 23, 2024