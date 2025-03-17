import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { propertyService } from '../../services/propertyService';
import type { Property } from '../../types';
import toast, { Toaster } from 'react-hot-toast';

export default function Dashboard() {
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }
    
    loadProperties();
  }, [navigate]);

  const loadProperties = () => {
    const loadedProperties = propertyService.getAll();
    setProperties(loadedProperties);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce bien ?')) {
      propertyService.delete(id);
      toast.success('Bien supprimé avec succès');
      loadProperties();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Gestion des Propriétés</h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
              onClick={() => navigate('/admin/properties/new')}
            >
              <Plus className="h-5 w-5 mr-2" />
              Ajouter un bien
            </button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            {properties.length === 0 ? (
              <div className="py-12 text-center text-gray-500">
                <p>Aucune propriété n'a été ajoutée.</p>
                <button
                  onClick={() => navigate('/admin/properties/new')}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Ajouter votre première propriété
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {properties.map((property) => (
                  <li key={property.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={property.imageUrl}
                            alt={property.title}
                            className="h-16 w-16 object-cover rounded-md"
                          />
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">{property.title}</h3>
                            <p className="text-sm text-gray-500">{property.location}</p>
                            <p className="text-sm text-gray-500">
                              {property.surface} m² • {property.rooms} pièces
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => navigate(`/admin/properties/edit/${property.id}`)}
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDelete(property.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}