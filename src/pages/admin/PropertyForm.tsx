import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft, Upload, X } from 'lucide-react';
import { propertyService } from '../../services/propertyService';
import type { Property } from '../../types';
import toast, { Toaster } from 'react-hot-toast';

export default function PropertyForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [property, setProperty] = useState<Partial<Property>>({
    title: '',
    type: 'house',
    price: 0,
    location: '',
    surface: 0,
    rooms: 0,
    description: '',
    imageUrl: ''
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const existingProperty = propertyService.getById(id);
      if (existingProperty) {
        setProperty(existingProperty);
        if (existingProperty.imageUrl) {
          setPreviewImage(existingProperty.imageUrl);
        }
      } else {
        toast.error('Propriété non trouvée');
        navigate('/admin/dashboard');
      }
    }
  }, [id, navigate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifier le type de fichier
    if (!file.type.match('image.*')) {
      toast.error('Veuillez sélectionner une image');
      return;
    }

    // Vérifier la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('L\'image ne doit pas dépasser 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      setPreviewImage(imageUrl);
      setProperty({ ...property, imageUrl });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setProperty({ ...property, imageUrl: '' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!property.imageUrl) {
      toast.error('Veuillez ajouter une image');
      return;
    }
    
    try {
      if (id) {
        propertyService.update(id, property as Omit<Property, 'id'>);
        toast.success('Bien mis à jour avec succès');
      } else {
        propertyService.add(property as Omit<Property, 'id'>);
        toast.success('Bien ajouté avec succès');
      }
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              {id ? 'Modifier le bien' : 'Ajouter un bien'}
            </h1>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Titre</label>
                  <input
                    type="text"
                    value={property.title}
                    onChange={(e) => setProperty({ ...property, title: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Type de bien</label>
                  <select
                    value={property.type}
                    onChange={(e) => setProperty({ ...property, type: e.target.value as Property['type'] })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="house">Maison</option>
                    <option value="apartment">Appartement</option>
                    <option value="office">Bureau</option>
                    <option value="land">Terrain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Prix</label>
                  <input
                    type="number"
                    value={property.price}
                    onChange={(e) => setProperty({ ...property, price: Number(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Localisation</label>
                  <input
                    type="text"
                    value={property.location}
                    onChange={(e) => setProperty({ ...property, location: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Surface (m²)</label>
                  <input
                    type="number"
                    value={property.surface}
                    onChange={(e) => setProperty({ ...property, surface: Number(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre de pièces</label>
                  <input
                    type="number"
                    value={property.rooms}
                    onChange={(e) => setProperty({ ...property, rooms: Number(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <div className="flex flex-col items-center space-y-4">
                    {previewImage ? (
                      <div className="relative">
                        <img 
                          src={previewImage} 
                          alt="Aperçu" 
                          className="w-full max-w-md h-64 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 transition-colors"
                      >
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-sm text-gray-500">
                          Cliquez pour ajouter une image
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          JPG, PNG, GIF jusqu'à 5MB
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    value={property.description}
                    onChange={(e) => setProperty({ ...property, description: e.target.value })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}