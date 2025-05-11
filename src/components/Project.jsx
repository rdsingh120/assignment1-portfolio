import { FaGithub } from 'react-icons/fa'

const Project = ({ image, title, desc, live, repo }) => {
  return (
    <div className=" project flex flex-col bg-white max-w-[350px] rounded-md overflow-hidden">
      <img className='blur' src={image} alt={title} />
      <div className="p-2 text-center">
        <span className="">
          <h1 className="font-medium m-2">{title}</h1>
        </span>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="p-2 flex gap-3 justify-center m-2">
        <a
          href={live}
          target="_blank"
          className="bg-green-500 px-10 py-1 text-white rounded-md"
        >
          Live
        </a>
        <a
          href={repo}
          target="_blank"
          className="bg-gray-800 px-10 py-1 text-white rounded-md"
        >
          <FaGithub size={22} />
        </a>
      </div>
    </div>
  )
}
export default Project
