import PackageCard from "./PackageCard";

function Packages() {

  const packages = [

    {
      id:1,
      title:"Dubai Adventure",
      duration:"5 Days / 4 Nights",
      price:"$999",
      image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    },

    {
      id:2,
      title:"Paris Escape",
      duration:"7 Days / 6 Nights",
      price:"$1499",
      image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },

    {
      id:3,
      title:"Maldives Holiday",
      duration:"6 Days / 5 Nights",
      price:"$1999",
      image:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd"
    }

  ];

  return (

    <section
      id="packages"
      className="py-20 bg-gray-100"
    >

      <h1 className="text-5xl font-bold text-center mb-14">
        Tour Packages
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">

        {packages.map((item)=>(

          <PackageCard
            key={item.id}
            image={item.image}
            title={item.title}
            duration={item.duration}
            price={item.price}
          />

        ))}

      </div>

    </section>

  );
}

export default Packages;