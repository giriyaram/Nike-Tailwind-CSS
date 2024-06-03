import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
   <section id="services"
    className="flex justify-center flex-wrap  gap-9 w-full max-container">
        {services.map((service) =>(
          <ServiceCard key={service.label} {...service} />
        ))}
   </section>
  )
}

export default Services