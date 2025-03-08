import React from 'react';

export default function Gallery() {
  const installations = [
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      title: "Residential Installation",
      location: "Sacramento, CA"
    },
    {
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80",
      title: "Commercial Solar Farm",
      location: "Phoenix, AZ"
    },
    {
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&q=80",
      title: "Industrial Complex",
      location: "Austin, TX"
    },
    {
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80",
      title: "Smart Home System",
      location: "Seattle, WA"
    },
    {
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=80",
      title: "Agricultural Installation",
      location: "Portland, OR"
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      title: "Community Solar Project",
      location: "Denver, CO"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Installation Gallery</h2>
          <p className="text-xl text-gray-600">See our recent solar installations across the country</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installations.map((install, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={install.image}
                alt={install.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">{install.title}</h3>
                <p className="text-gray-300">{install.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}