import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkedAlt, FaCogs, FaLock, FaCloudUploadAlt, FaHandshake} from "react-icons/fa";

function HomeComponent() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section
          className="bg-cover bg-center py-20"
          style={{ backgroundImage: "url('https://i.pinimg.com/564x/31/f4/eb/31f4ebea33924614514b630210b5f741.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to BeeKeb Event Planner</h1>
              <p className="text-lg mb-6">
                Your one-stop solution for seamless event planning and management.
              </p>
              <Link
                to="/login"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-left px-3">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify">
              At BeeKeb Event Planner, we pride ourselves on meticulous attention to detail and a personalized approach to every event. Our team of experienced professionals collaborates closely with clients to understand their unique needs and preferences, ensuring that every event is flawlessly executed from start to finish. Whether you’re planning a small intimate gathering or a large-scale celebration, we handle everything from venue selection and décor to entertainment and catering. Our commitment to excellence guarantees that your event will not only meet but exceed your expectations, leaving a lasting impression on you and your guests.
              </p>
            </div>
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <img
                src="https://i.pinimg.com/564x/de/02/14/de0214369000dc93cdfdbecb817595f7.jpg"
                alt="Event Planning Left"
                className="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-purple-200"
              />
            </div>
          </div>
          <Link
                to="/login"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 "
              >
                Explore More...
              </Link>
        </div>
      </section>

      {/* Features Section */}
            <section className="bg-gray-200 py-16">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-purple-50 rounded-full">
                      <FaCalendarAlt className="text-blue-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Event Planning</h3>
                    <p className="text-gray-600">Comprehensive planning services for your events.</p>
                  </div>
                  {/* Feature 2 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-purple-50 rounded-full">
                      <FaMapMarkedAlt className="text-red-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Venue Selection</h3>
                    <p className="text-gray-600">Helping you choose the perfect venue for your event.</p>
                  </div>
                  {/* Feature 3 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-purple-50 rounded-full">
                      <FaCogs className="text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Customization</h3>
                    <p className="text-gray-600">Tailoring every detail to meet your needs.</p>
                  </div>
                  {/* Feature 4 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-purple-50 rounded-full">
                      <FaLock className="text-purple-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Security</h3>
                    <p className="text-gray-600">Ensuring safety and security at all events.</p>
                  </div>
                  {/* Feature 5 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-purple-50 rounded-full">
                      <FaCloudUploadAlt className="text-orange-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Catering</h3>
                    <p className="text-gray-600">Delicious catering options tailored to your event.</p>
                  </div>
                  {/* Feature 6 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-purple-50 rounded-full">
                      <FaHandshake className="text-red-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Hospitality</h3>
                    <p className="text-gray-600">Professional hospitality services for guests.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Featured Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Event Card 1 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/51/d8/93/51d8935a11748ca3dcb76c120fd2177f.jpg"
                    alt="Marriage"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Marriage</h3>
                      <p className="text-white mb-2">Celebrate the union of two souls in a beautiful and unforgettable wedding ceremony. Join us for a day filled with love, joy, and cherished memories.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 2 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/eb/57/9d/eb579d8d6189b1fe7270596da09456a1.jpg"
                    alt="Weaning"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Weaning</h3>
                      <p className="text-white mb-2">Mark the special milestone as your baby transitions from breastfeeding to solid foods. This event celebrates the growth and development of your little one.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 3 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/46/fa/ae/46faae66855d31afda8ce3b1196d8cfd.jpg"
                    alt="Corporate Events"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Corporate Events</h3>
                      <p className="text-white mb-2">Experience a professionally organized event designed to foster networking, collaboration, and growth within the business community.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 4 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/13/74/2b/13742bb357f63b09be23f884e0daaaf3.jpg"
                    alt="Birthday Party"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Birthday Party</h3>
                      <p className="text-white mb-2">Join us for a fun and festive celebration of a special someone's birthday. Enjoy good company, great food, and unforgettable moments.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 5 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/18/fe/da/18fedaa3a5852ed995a402d2b3375ca3.jpg"
                    alt="Baby Shower"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Baby Shower</h3>
                      <p className="text-white mb-2">Celebrate the upcoming arrival of a new baby with a joyful shower party. It’s a time to share excitement and offer well-wishes to the expecting parents.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 6 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/ec/18/71/ec18719cc74862987ac192d83bcfdee0.jpg"
                    alt="Anniversary"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Anniversary</h3>
                      <p className="text-white mb-2">Commemorate the special milestone of an anniversary with a memorable celebration. Reflect on past achievements and look forward to future successes.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 7 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/564x/b0/6f/6d/b06f6dec359cc479257fc9502fa39139.jpg"
                    alt="Engagement Party"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Engagement Party</h3>
                      <p className="text-white mb-2">Celebrate the joyous occasion of a couple’s engagement with a party filled with love, laughter, and excitement for the journey ahead.</p>
                    </div>
                  </div>
                </div>
                {/* Event Card 8 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                  <img
                    src="https://i.pinimg.com/736x/21/21/7d/21217dcdef3e53634d63492cd4820c08.jpg"
                    alt="Graduation"
                    className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-50">
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold mb-2">Graduation</h3>
                      <p className="text-white mb-2">Honor the achievements and hard work of graduates with a ceremony that marks the end of one chapter and the beginning of new opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



      {/* Contact Us Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            Have questions or need assistance? Reach out to us and we'll be happy to help.
          </p>
          <Link
            to="/contact"
            className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} BeeKeb Event Planner. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeComponent;
