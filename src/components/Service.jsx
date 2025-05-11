import Title from "./Title"

const Service = ({ title, desc }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-1">{title}</h1>
      <p className="text-gray-800">{desc}</p>
    </div>
  )
}
export default Service
