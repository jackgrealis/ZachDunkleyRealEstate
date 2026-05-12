import React from 'react';

export default function Home() {
  const userPhoto = "https://assets.cloudhi.io/system/team-members/98e72742-1520-499c-b483-e4b7583c2b81.jpg.webp";
  
  const leftImages = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wait%C5%ABkei_sculpture_Rotorua_%28Government_Gardens%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Maori_stone_sculpture%2C_Rotorua_Museum.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Mosaic_Gallery%2C_Rotorua_Art_Village.jpg"
  ];
  
  const rightImages = [
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Redwoods_Forest_Rotorua_12.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Redwoods_Forest_Rotorua_09.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rotorua_Lakes_Council_Building%2C_Rotorua.jpg"
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9] font-sans">
      {/* Header */}
      <header className="bg-[#00AEEF] text-white h-20 flex items-center px-8 font-bold text-3xl tracking-wide sticky top-0 z-50 shadow-md">
        <div className="max-w-[1400px] mx-auto w-full">
          Zach Dunkley
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex justify-center max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
        
        {/* Left Sidebar */}
        <aside className="hidden md:flex flex-col items-center py-5 gap-4 w-[100px] bg-[#f4f7f9]">
          <img 
            src={userPhoto} 
            alt="Zach Dunkley" 
            className="w-20 h-20 rounded-full object-cover border-4 border-[#00AEEF] bg-white shadow-md"
          />
          {leftImages.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt={`Rotorua Scenic ${idx + 1}`} 
              className="w-20 h-[120px] rounded-lg object-cover border border-gray-200 shadow-sm"
            />
          ))}
        </aside>

        {/* Center Content */}
        <main className="flex-1 max-w-[800px] bg-white my-8 mx-4 p-8 md:p-10 rounded-xl shadow-xl leading-relaxed">
          
          {/* Contact Form Section (Top) */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#003468] mb-6 text-center">Contact Zach Dunkley</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 mb-1">Full Name *</label>
                <input type="text" required className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF]" placeholder="Your Name" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 mb-1">Phone</label>
                <input type="tel" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF]" placeholder="027..." />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 mb-1">Email</label>
                <input type="email" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF]" placeholder="email@example.com" />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 mb-1">What are you looking for? *</label>
                <select required className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white">
                  <option value="">-- Select --</option>
                  <option value="Buying">Looking to buy</option>
                  <option value="Selling">Looking to sell</option>
                  <option value="Renting">Looking to rent</option>
                  <option value="Investing">Investment property</option>
                  <option value="Just Exploring">Just exploring</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-semibold text-gray-700 mb-1">When are you looking to move? *</label>
                <select required className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white">
                  <option value="">-- Select --</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="Just browsing">Just browsing</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-semibold text-gray-700 mb-1">Anything else I should know?</label>
                <textarea className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF] h-32" placeholder="Budget, must-haves..."></textarea>
              </div>
              <button className="md:col-span-2 bg-[#00AEEF] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0097d1] transition shadow-md uppercase tracking-wide">
                Send Message
              </button>
            </form>
          </section>

          <hr className="my-12 border-gray-200" />

          {/* Harcourts Feature Text Section (Bottom) */}
          <section>
            <h1 className="text-4xl md:text-5xl font-bold text-[#003468] mb-6">
              Your Rotorua <strong className="text-[#005c9a]">Real Estate Specialists</strong>
            </h1>
            
            <p className="text-lg mb-6 text-gray-800">
              We are an award-winning real estate company with an experienced team of real estate agents, property managers, and administrators to assist with your buying, selling, property management or commercial property needs. Our team are regularly involved in our community and community events, and it is with a sense of pride that we call Rotorua our home. We just love living and working in this vibrant paradise.
            </p>
            
            <p className="text-lg mb-10 font-bold text-[#005c9a]">
              Contact us today to experience the Harcourts difference.
            </p>

            <h2 className="text-3xl font-bold text-[#003468] mb-6">Why Harcourts Rotorua?</h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Welcome to Harcourts Real Estate Rotorua, your premier destination for all your real estate needs in the vibrant community of Rotorua, New Zealand. As your trusted real estate agents in Rotorua, we are committed to providing unparalleled service and expertise to help you navigate the local property market with confidence. Whether you're buying, selling, or seeking a property appraisal in Rotorua, our experienced team is here to assist you every step of the way. With a deep understanding of the real estate Rotorua landscape, we pride ourselves on delivering personalized solutions tailored to meet your unique needs and goals. When you choose Harcourts Rotorua, you're not just getting a real estate agent; you're gaining a dedicated partner invested in your success.
              </p>
              
              <p>
                At Harcourts Rotorua, we understand that property appraisals are a crucial step in the buying or selling process. That's why we offer comprehensive property appraisal services in Rotorua to help you determine the true value of your home or prospective investment. Our team of expert real estate agents in Rotorua utilizes industry-leading tools and market insights to provide accurate and reliable property valuations tailored to your specific property and circumstances. Whether you're looking to sell your home or curious about the current market value of a property, our skilled agents are here to provide you with the information you need to make informed decisions.
              </p>
              
              <p>
                When it comes to finding a reputable real estate agent in Rotorua, look no further than Harcourts Rotorua. With a proven track record of success and a dedication to excellence, our team of experienced agents is committed to delivering exceptional results for our clients. Whether you're a first-time homebuyer, seasoned investor, or looking to sell your property, our knowledgeable agents have the expertise and resources to help you achieve your real estate goals. At Harcourts Rotorua, we believe in building long-lasting relationships based on trust, integrity, and exceptional service.
              </p>
              
              <p>
                In conclusion, Harcourts Rotorua is your go-to destination for all your real estate needs in Rotorua, New Zealand. From property appraisals to buying and selling, our dedicated team of real estate agents is here to provide you with unparalleled service and expertise every step of the way. Trust Harcourts Rotorua to be your partner in achieving your real estate goals, and let us help you unlock the full potential of your property investments.
              </p>
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:flex flex-col items-center py-5 gap-4 w-[100px] bg-[#f4f7f9]">
          <img 
            src={userPhoto} 
            alt="Zach Dunkley" 
            className="w-20 h-20 rounded-full object-cover border-4 border-[#00AEEF] bg-white shadow-md"
          />
          {rightImages.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt={`Rotorua Scenic ${idx + 1}`} 
              className="w-20 h-[120px] rounded-lg object-cover border border-gray-200 shadow-sm"
            />
          ))}
        </aside>
      </div>
    </div>
  );
}
