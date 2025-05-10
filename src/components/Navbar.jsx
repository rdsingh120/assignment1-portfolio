import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex flex-col bg-[#f9f9f9]">
      <div className="logo-container flex justify-center">
        <img src={logo} alt="logo" width="350px" />
      </div>
      <div
        className="nav-links-container flex flex-wrap justify-center gap-12 
      bg-black text-[#f9f9f9] text-xl font-semibold py-3"
      >
        <Link className='tracking-widest' to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}
export default Navbar
