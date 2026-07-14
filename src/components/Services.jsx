import ServiceCard from "./ServiceCard";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaPassport } from "react-icons/fa";

function Services() {

  const services = [
    {
      id: 1,
      icon: <FaPlane />,
      title: "Flight Booking",
      description: "Book domestic and international flights at affordable prices."
    },
    {
      id: 2,
      icon: <FaHotel />,
      title: "Hotel Reservation",
      description: "Stay in premium hotels with exclusive discounts."
    },
    {
      id: 3,
      icon: <FaMapMarkedAlt />,
      title: "Tour Guide",
      description: "Professional guides for a memorable travel experience."
    },
    {
      id: 4,
      icon: <FaPassport />,
      title: "Visa Assistance",
      description: "Quick and reliable visa consultation for your trips."
    }
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white"
    >

      <h1 className="text-5xl font-bold text-center mb-14">
        Our Services
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}

      </div>

    </section>
  );
}

export default Services;