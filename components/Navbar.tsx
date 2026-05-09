import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-harcourts-blue font-bold text-xl tracking-tight">
              ZACH DUNKLEY <span className="text-gray-400 font-light">| Harcourts</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-600 hover:text-harcourts-blue px-3 py-2 font-medium transition">Home</Link>
              <Link href="/properties" className="text-gray-600 hover:text-harcourts-blue px-3 py-2 font-medium transition">Properties</Link>
              <Link href="#contact" className="bg-harcourts-blue text-white px-4 py-2 rounded-md font-medium hover:bg-harcourts-darkBlue transition">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
