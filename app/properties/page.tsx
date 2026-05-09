"use client";
import { useState } from 'react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
export default function PropertiesPage() {
  const [filter, setFilter] = useState<'all' | 'sale' | 'sold'>('all');
  const filteredProperties = properties.filter(p => 
    filter === 'all' ? true : p.status === filter
  );
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-harcourts-slate mb-4">Property Listings</h1>
        <p className="text-gray-600">Discover your next home or see our recent success stories in Rotorua.</p>
      </div>
      {/* Filter Bar */}
      <div className="flex justify-center gap-4 mb-12">
        {['all', 'sale', 'sold'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as any)}
            className={`px-6 py-2 rounded-full font-medium capitalize transition ${
              filter === type 
                ? 'bg-harcourts-blue text-white shadow-lg' 
                : 'bg-white text-gray-600 border hover:border-harcourts-blue'
            }`}
          >
            {type === 'all' ? 'All Properties' : type === 'sale' ? 'For Sale' : 'Recently Sold'}
          </button>
        ))}
      </div>
      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No properties found in this category. Check back soon!
          </div>
        )}
      </div>
    </div>
  );
}
