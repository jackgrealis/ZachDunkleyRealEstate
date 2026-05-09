import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-harcourts-blue py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Local Rotorua Property Expert</h1>
          <p className="text-xl mb-8 opacity-90">Combining local knowledge with modern marketing to get you the best result.</p>
          <div className="flex justify-center gap-4">
            <a href="/properties" className="bg-white text-harcourts-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">View Listings</a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-harcourts-blue transition">Get an Appraisal</a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/zach-profile.jpg" alt="Zach Dunkley" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-harcourts-blue">
            <p className="font-bold text-harcourts-blue">Rotorua Born & Raised</p>
            <p className="text-sm text-gray-600">Deep community roots</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-harcourts-slate mb-6">Meet Zach Dunkley</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Rotorua isn’t just where I live — it’s my home, my community, and the place I’m proud to help others discover.</p>
            <p>I bring a modern, tech-savvy approach to real estate, combining local knowledge with smart digital marketing that helps you stand out in a busy market.</p>
            <p>When I’m not working, you’ll probably find me under the hood of a classic car — right now it’s a Rover P5B — or out enjoying Rotorua’s great outdoors.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-harcourts-lightGray rounded-lg text-center">
              <span className="block font-bold text-harcourts-blue">Local</span>
              <span className="text-xs text-gray-500">Expertise</span>
            </div>
            <div className="p-4 bg-harcourts-lightGray rounded-lg text-center">
              <span className="block font-bold text-harcourts-blue">Digital</span>
              <span className="text-xs text-gray-500">Marketing</span>
            </div>
            <div className="p-4 bg-harcourts-lightGray rounded-lg text-center">
              <span className="block font-bold text-harcourts-blue">Genuine</span>
              <span className="text-xs text-gray-500">Support</span>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-harcourts-lightGray px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <div className="p-12 bg-harcourts-blue text-white">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="mb-8 opacity-80">Whether you are looking to buy, sell, or just want a professional appraisal of your home, I'm here to help.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="p-2 bg-white/20 rounded-full">📞</span>
                <span>027 227 8847</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-white/20 rounded-full">✉️</span>
                <span>z.dunkley@harcourts.co.nz</span>
              </div>
            </div>
          </div>
          <div className="p-12">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-harcourts-blue outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-harcourts-blue outline-none" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-harcourts-blue outline-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-harcourts-blue text-white py-3 rounded-lg font-bold hover:bg-harcourts-darkBlue transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
