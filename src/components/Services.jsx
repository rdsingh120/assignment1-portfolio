import Service from '../components/Service'
import Title from '../components/Title'
import { services } from '../data/services'

const Services = () => {
  return (
    <>
      <span className="text-center">
        <Title text="🛠️ Services I Offer" />
      </span>
      <div className="space-y-6">
        {services.map(({ title, desc }) => (
          <Service key={title} title={title} desc={desc} />
        ))}
      </div>
    </>
  )
}
export default Services

// File Name: Services.jsx
// Name: Ripudaman Singh 
// Student Number: 301371452
// Date: May 23, 2024
