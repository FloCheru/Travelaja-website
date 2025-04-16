import React from "react";

const HomePageContent: React.FC = () => {
  const destinations = [
    {
      title: "Rome, Italie",
      price: "€890",
      duration: "7 jours",
      image: "/images/rome.jpg",
    },
    {
      title: "Barcelone, Espagne",
      price: "€750",
      duration: "5 jours",
      image: "/images/barcelona.jpg",
    },
    {
      title: "Paris, France",
      price: "€980",
      duration: "6 jours",
      image: "/images/paris.jpg",
    },
    {
      title: "Amsterdam, Pays-Bas",
      price: "€720",
      duration: "4 jours",
      image: "/images/amsterdam.jpg",
    },
    {
      title: "Lisbonne, Portugal",
      price: "€690",
      duration: "5 jours",
      image: "/images/lisbon.jpg",
    },
    {
      title: "Athènes, Grèce",
      price: "€870",
      duration: "6 jours",
      image: "/images/athens.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Laura M.",
      img: "/images/testimonials/laura.jpg",
      message:
        "Rome était magique ! Merci pour l'organisation parfaite. On a adoré les visites et l'hôtel était superbe.",
    },
    {
      name: "Adrien B.",
      img: "/images/testimonials/adrien.jpg",
      message:
        "Barcelone était magnifique. Le guide local était top et on a même pu découvrir des coins cachés que seuls les locaux connaissent.",
    },
    {
      name: "Sophie D.",
      img: "/images/testimonials/sophie.jpg",
      message:
        "Un séjour inoubliable à Amsterdam ! L’organisation était fluide du début à la fin. Merci !",
    },
    {
      name: "Marc R.",
      img: "/images/testimonials/marc.jpg",
      message:
        "Lisbonne en 5 jours, c’était le rêve ! Soleil, gastronomie, fado… on recommande à 100%.",
    },
    {
      name: "Camille E.",
      img: "/images/testimonials/camille.jpg",
      message:
        "Athènes nous a transportés dans un autre temps. Le circuit était bien rythmé et la guide passionnante.",
    },
    {
      name: "Julien T.",
      img: "/images/testimonials/julien.jpg",
      message:
        "Paris comme on ne l’avait jamais vu ! Merci pour les activités insolites proposées.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Travelers Point Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src="/placeholder.svg"
              alt="Traveler 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <img
              src="/placeholder.svg"
              alt="Traveler 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/placeholder.svg"
              alt="Traveler 3"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Nous vous aidons à trouver le meilleur voyage
          </h2>
          <p className="text-gray-600 mb-6">
            Découvrez des destinations uniques, sélectionnées avec soin pour
            répondre à vos envies d’évasion. Que vous rêviez de plages
            paradisiaques, d’escapades culturelles ou d’aventures nature, notre
            équipe est là pour vous guider, organiser et vous accompagner à
            chaque étape.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <span className="text-2xl font-bold">100+</span>
              <p className="text-sm text-gray-500">
                Forfaits vacances personnalisés
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">172</span>
              <p className="text-sm text-gray-500">
                Hôtels partenaires dans le monde entier
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">68</span>
              <p className="text-sm text-gray-500">Solutions de transport</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">32M+</span>
              <p className="text-sm text-gray-500">
                Voyageurs déjà inspirés par nos conseil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destination Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Découvrez l'Europe autrement
        </h2>
        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{destination.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {destination.price}
                </p>
                <p className="text-xs text-gray-500">
                  <img
                    src="/icons/clock.svg"
                    alt="Durée"
                    className="w-3 h-3 inline mr-1"
                  />
                  {destination.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          What they say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-sm text-gray-600">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
