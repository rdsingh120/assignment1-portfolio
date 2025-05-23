import Container from '../components/Container'
import HR from '../components/HR'
import Title from '../components/Title'

const ContactPage = () => {
  return (
    <Container>
      <div className="">
        <span className="text-center">
          <Title text="Contact Me" />
        </span>

        <div className="space-y-2">
          <p>
            <span className="font-medium">📧 Email:</span>{' '}
            <span className="hover:text-blue-500 cursor-pointer">
              rsin1191@my.centennialcollege.ca
            </span>
          </p>
          <p>
            <span className="font-medium">📱 Phone:</span>{' '}
            <span className="hover:text-blue-500 cursor-pointer">
              (999) 999-9999
            </span>
          </p>
          <p>
            <span className="font-medium">📍 Location: </span>{' '}
            <span className="hover:text-blue-500 cursor-pointer">
              Toronto ON
            </span>
          </p>
          <p>
            <span className="font-medium">💼 LinkedIn: </span>{' '}
            <span className="hover:text-blue-500 cursor-pointer">
              linkedin.com/in/rdsingh120
            </span>
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-[500px] m-auto">
        <span className="text-center">
          <Title text="✉️ Send Me a Message" />
        </span>

        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 w-full bg-[#f9f9f9] border border-black rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 w-full bg-[#f9f9f9] border border-black rounded"
          />
          <input
            type="number"
            placeholder="Contact Number"
            className="p-2 w-full bg-[#f9f9f9] border border-black rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 w-full bg-[#f9f9f9] border border-black rounded"
          />
          <textarea
            placeholder="Message"
            className="p-2 w-full h-[150px] bg-[#f9f9f9] border border-black rounded"
          />
          <button
            className="bg-gray-900 text-white p-2 rounded hover:bg-gray-700 duration-200"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  )
}
export default ContactPage

// File Name: ContactPage.jsx
// Name: Ripudaman Singh 
// Student Number: 301371452
// Date: May 23, 2024