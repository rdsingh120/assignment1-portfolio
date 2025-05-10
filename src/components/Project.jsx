import Title from './Title'

const Project = () => {
  return (
    <div className=" project flex flex-col bg-white max-w-[350px] rounded-md overflow-hidden">
      <img
        src="https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg"
        alt=""
      />
      <div className="p-2 text-center">
        <span className="">
          <h1 className="font-medium m-2">Project 1</h1>
        </span>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum
          quisquam corporis amet recusandae repudiandae a quia. Similique modi,
          pariatur, mollitia aliquam nesciunt recusandae debitis unde
          laudantium, tenetur facere voluptatem.
        </p>
      </div>
      <div className="p-2 flex gap-3 justify-center m-2">
        <button className="bg-green-500 px-10 py-1 text-white rounded-md">
          Live
        </button>
        <button className="bg-gray-800 px-10 py-1 text-white rounded-md">
          GitHub
        </button>
      </div>
    </div>
  )
}
export default Project
