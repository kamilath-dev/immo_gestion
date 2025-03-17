import { useState, useEffect } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyFilter } from '../components/PropertyFilter';
import { propertyService } from '../services/propertyService';
import type { Property, FilterOptions } from '../types';

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProperties = () => {
    try {
      const loadedProperties = propertyService.getAll();
      setProperties(loadedProperties);
      setFilteredProperties(loadedProperties);
    } catch (error) {
      console.error('Erreur lors du chargement des propriétés:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();
    // S'abonner aux changements
    const unsubscribe = propertyService.subscribe(loadProperties);
    return () => unsubscribe();
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    try {
      const filtered = properties.filter(property => {
        if (filters.type && property.type !== filters.type) return false;
        if (property.price < filters.minPrice) return false;
        if (property.price > filters.maxPrice) return false;
        if (property.rooms < filters.minRooms) return false;
        return true;
      });
      setFilteredProperties(filtered);
    } catch (error) {
      console.error('Erreur lors du filtrage des propriétés:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Propriétés</h2>
        <p className="text-gray-600">
          Découvrez notre sélection de biens immobiliers d'exception.
        </p>
      </div>

      <PropertyFilter onFilterChange={handleFilterChange} />
      
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">Aucune propriété ne correspond à vos critères.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}