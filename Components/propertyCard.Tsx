import Link from 'next/link';
import { Property } from '@/data/properties';
export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-video overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
          property.status === 'sold' ? 'bg-gray-600' : 'bg-harcourts-blue'
        }`}>
          {property.status === 'sold' ? 'Sold' : 'For Sale'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-harcourts-slate mb-2 line-clamp-1">{property.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{property.address}</p>
        
        <div className="flex justify-between items-center border-t pt-4 text-gray-600">
          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1">🛏️ {property.beds}</span>
            <span className="flex items-center gap-1">🛁 {property.baths}</span>
            <span className="flex items-center gap-1">🚗 {property.garage}</span>
          </div>
          <span className="font-bold text-harcourts-blue">{property.price}</span>
        </div>
        
        <Link 
          href={`/properties/${property.id}`} 
          className="block text-center mt-6 w-full py-2 border border-harcourts-blue text-harcourts-blue rounded-lg font-medium hover:bg-harcourts-blue hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
