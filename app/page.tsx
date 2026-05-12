"use client";

import React, { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const userPhoto = "https://assets.cloudhi.io/system/team-members/98e72742-1520-499c-b483-e4b7583c2b81.jpg.webp";
  
  const leftImages = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wait%C5%ABkei_sculpture_Rotorua_%28Government_Gardens%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Maori_stone_sculpture%2C_Rotorua_Museum.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Mosaic_Gallery%2C_Rotorua_Art_Village.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Redwoods_Forest_Rotorua_12.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Redwoods_Forest_Rotorua_09.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rotorua_Lakes_Council_Building%2C_Rotorua.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Steamy_landscape_at_Wai-O-Tapu_thermal_area_near_Rotorua_%286941545434%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sleeping_Giant_%28137818093%29.jpeg",
  ];
  
  const rightImages = [
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Steamy_landscape_at_Wai-O-Tapu_thermal_area_near_Rotorua_%286941545434%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sleeping_Giant_%28137818093%29.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Waiotapu_Artist%27s_Palette%2C_%C2%AB_Champagne_pool_%C2%BBNouvelle_Z%C3%A9lande.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/%2200_0701_Waiotapu_Thermal_Area%2C_New_Zealand.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Waimangu_geyser.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/67/NZL-rotorua-tepuia-geysir.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wait%C5%ABkei_sculpture_Rotorua_%28Government_Gardens%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Maori_stone_sculpture%2C_Rotorua_Museum.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Mosaic_Gallery%2C_Rotorua_Art_Village.jpg"
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/maqvveje', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

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
            
            {status === 'success' ? (
              <div className="text-center py-10 bg-green-50 rounded-lg border-2 border-green-200">
                <p className="text-xl font-bold text-green-700">Message Sent!</p>
                <p className="text-green-600">Thanks for reaching out. I'll be in touch soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input type="text" name="name" required className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF]" placeholder="Your Name" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF]" placeholder="027..." />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF]" placeholder="email@example.com" />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">What are you looking for? *</label>
                  <select name="interest" required className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white">
                    <option value="">-- Select --</option>
                    <option value="Buying">Looking to buy</option>
                    <option value="Selling">Looking to sell</option>
                    <option value="Renting">Looking to rent</option>
                    <option value="Investing">Investment property</option>
                    <option value="Just Exploring">Just exploring</option>
                  </select>
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="font-semibold text-gray-700 mb-1">When are you looking to make a move? *</label>
                  <select name="timeline" required className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white">
                    <option value="">-- Select --</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just browsing">Just browsing</option>
                  </select>
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label className="font-semibold text-gray-700 mb-1">Anything else I should know?</label>
                  <textarea name="message" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#00AEEF] h-32" placeholder="Budget, must-haves..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`md:col-span-2 text-white py-4 rounded-lg font-bold text-lg transition shadow-md uppercase tracking-wide ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00AEEF] hover:bg-[#0097d1]'}`}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="md:col-span-2 text-red-500 text-center text-sm font-medium">
                    Oops! There was a problem. Please try again.
                  </p>
                )}
              </form>
            )}
          </section>
          
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-[#003468] mb-4">Why Choose Zach Dunkley?</h2>
             <p className="text-lg text-gray-700">
               As a Rotorua born and raised professional, Zach Dunkley combines deep-rooted local knowledge with a modern, tech-savvy approach to real estate. Dedicated to building genuine relationships based on trust and integrity, Zach focuses on delivering exceptional results through smart digital marketing and a personalized touch. Whether you're a first-time buyer or a seasoned investor, Zach's commitment to the community and his passion for excellence ensure your property journey is seamless and successful.
             </p>
          </div>

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
                Harcourts Rotorua is an award-winning real estate company comprising a highly experienced team of agents, property managers, and administrators. With a proven track record of success and a deep understanding of the local landscape, we provide unparalleled service and comprehensive property appraisals to help you unlock the full potential of your investments. When you choose Harcourts Rotorua, you gain a dedicated partner invested in your success and committed to delivering exceptional results across the region.
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
