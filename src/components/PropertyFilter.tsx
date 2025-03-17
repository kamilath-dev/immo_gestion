import { useState } from 'react';
import { Filter } from 'lucide-react';
import type { FilterOptions } from '../types';

interface PropertyFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function PropertyFilter({ onFilterChange }: PropertyFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    type: '',
    minPrice: 0,
    maxPrice: 1000000,
    minRooms: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: name === 'type' ? value : Number(value)
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 mr-2 text-blue-600" />
        <h2 className="text-xl font-semibold">Filtres</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type de bien
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Tous</option>
            <option value="house">Maison</option>
            <option value="apartment">Appartement</option>
            <option value="office">Bureau</option>
            <option value="land">Terrain</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prix minimum
          </label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prix maximum
          </label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pièces minimum
          </label>
          <input
            type="number"
            name="minRooms"
            value={filters.minRooms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
}