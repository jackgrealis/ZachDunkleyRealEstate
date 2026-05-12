import React from 'react';

export default function Home() {
  const userPhoto = "https://assets.cloudhi.io/system/team-members/98e72742-1520-499c-b483-e4b7583c2b81.jpg.webp";
  
  const leftImages = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Whakarewarewa-geothermal-area-rotorua.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Wai-o-Tapu_Champagne_Pool_in_Rotorua_02.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Waiotapu_Thermal_Area_Lower_Champagne_Pool.jpg"
  ];
  
  const rightImages = [
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/Redwoods_Forest_Rotorua_in_winter.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Te_Puia_Pohutu_geyser.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Lake_Rotorua_Mokoia_island_2006.jpg"
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9] font-sans">
      {/* Header */}
      <header className="bg-[#00AEEF] text-white h-20 flex items-center px-8 font-bold text-4xl tracking-wide sticky top-0 z-50 shadow-md">
        zach
      </header>

      {/* Main Layout */}
      <div className="flex justify-center max-w-[1400px] mx-auto min-h-[calc(100vh-80px)]">
        
        {/* Left Sidebar */}
        <aside className="hidden md:flex flex-col items-center py-5 gap-4 w-[100px] bg-[#f4f7f9]">
          <img 
            src={userPhoto} 
            alt="zach" 
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
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:flex flex-col items-center py-5 gap-4 w-[100px] bg-[#f4f7f9]">
          <img 
            src={userPhoto} 
            alt="zach" 
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
