import { motion } from 'framer-motion';
import { Building2, MapPin, Ruler, BedDouble } from 'lucide-react';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          {property.type === 'house' && 'Maison'}
          {property.type === 'apartment' && 'Appartement'}
          {property.type === 'office' && 'Bureau'}
          {property.type === 'land' && 'Terrain'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{property.location}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-1" />
            <span>{property.surface} m²</span>
          </div>
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1" />
            <span>{property.rooms} pièces</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            {property.price.toLocaleString('fr-FR')} €
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Voir détails
          </button>
        </div>
      </div>
    </motion.div>
  );
}