import React, { useState } from 'react';

const EventComponent = () => {
  const events = [
    {
      title: 'Marriage',
      description: 'Celebrate the union of two souls in a beautiful and unforgettable wedding ceremony. Join us for a day filled with love, joy, and cherished memories.',
      imgSrc: 'https://i.pinimg.com/564x/51/d8/93/51d8935a11748ca3dcb76c120fd2177f.jpg',
      date: '12th August 2024',
      location: 'Kathmandu, Nepal',
    },
    {
      title: 'Weaning',
      description: 'Mark the special milestone as your baby transitions from breastfeeding to solid foods. Celebrate the growth and development of your little one.',
      imgSrc: 'https://i.pinimg.com/564x/eb/57/9d/eb579d8d6189b1fe7270596da09456a1.jpg',
      date: '20th September 2024',
      location: 'Pokhara, Nepal',
    },
    {
      title: 'Corporate Events',
      description: 'Experience a professionally organized event designed to foster networking, collaboration, and growth within the business community.',
      imgSrc: 'https://i.pinimg.com/564x/46/fa/ae/46faae66855d31afda8ce3b1196d8cfd.jpg',
      date: '5th October 2024',
      location: 'Lalitpur, Nepal',
    },
    {
      title: 'Birthday Party',
      description: 'Join us for a fun and festive celebration of a special someone\'s birthday. Enjoy good company, great food, and unforgettable moments.',
      imgSrc: 'https://i.pinimg.com/564x/13/74/2b/13742bb357f63b09be23f884e0daaaf3.jpg',
      date: '18th November 2024',
      location: 'Bhaktapur, Nepal',
    },
    {
      title: 'Baby Shower',
      description: 'Celebrate the upcoming arrival of a new baby with a joyful shower party. It’s a time to share excitement and offer well-wishes to the expecting parents.',
      imgSrc: 'https://i.pinimg.com/564x/18/fe/da/18fedaa3a5852ed995a402d2b3375ca3.jpg',
      date: '24th December 2024',
      location: 'Biratnagar, Nepal',
    },
    {
      title: 'Anniversary',
      description: 'Commemorate the special milestone of an anniversary with a memorable celebration. Reflect on past achievements and look forward to future successes.',
      imgSrc: 'https://i.pinimg.com/564x/ec/18/71/ec18719cc74862987ac192d83bcfdee0.jpg',
      date: '14th January 2025',
      location: 'Chitwan, Nepal',
    },
    {
      title: 'Engagement Party',
      description: 'Celebrate the joyous occasion of a couple’s engagement with a party filled with love, laughter, and excitement for the journey ahead.',
      imgSrc: 'https://i.pinimg.com/564x/b0/6f/6d/b06f6dec359cc479257fc9502fa39139.jpg',
      date: '27th February 2025',
      location: 'Dharan, Nepal',
    },
    {
      title: 'Graduation',
      description: 'Honor the achievements and hard work of graduates with a ceremony that marks the end of one chapter and the beginning of new opportunities.',
      imgSrc: 'https://i.pinimg.com/736x/21/21/7d/21217dcdef3e53634d63492cd4820c08.jpg',
      date: '30th March 2025',
      location: 'Butwal, Nepal',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">Featured Event</h2>
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <img
            src={currentEvent.imgSrc}
            alt={currentEvent.title}
            className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">{currentEvent.title}</h3>
            <p className="text-lg text-gray-300">{currentEvent.description}</p>
            <div className="mt-6">
              <p className="text-lg text-gray-300"><strong>Date:</strong> {currentEvent.date}</p>
              <p className="text-lg text-gray-300"><strong>Location:</strong> {currentEvent.location}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button onClick={handlePrev} className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-700">
            Previous
          </button>
          <button onClick={handleNext} className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-700">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventComponent;
