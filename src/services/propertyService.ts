import type { Property } from '../types';

const STORAGE_KEY = 'properties';

// Événement personnalisé pour les changements de propriétés
const PROPERTIES_CHANGE_EVENT = 'propertiesChange';

// Données initiales pour éviter une page vide
const initialProperties: Property[] = [
  {
    id: '1',
    title: 'Villa de Luxe',
    type: 'house',
    price: 1250000,
    location: 'Bordeaux Centre',
    surface: 350,
    rooms: 5,
    description: 'Magnifique villa de luxe avec piscine et jardin paysager.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Appartement Modern',
    type: 'apartment',
    price: 450000,
    location: 'Chartrons',
    surface: 95,
    rooms: 3,
    description: 'Bel appartement moderne avec terrasse et vue dégagée.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Maison Contemporaine',
    type: 'house',
    price: 850000,
    location: 'Caudéran',
    surface: 180,
    rooms: 4,
    description: 'Maison contemporaine avec jardin et garage double.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  }
];

// Fonction pour émettre un événement de changement
const emitChange = () => {
  window.dispatchEvent(new Event(PROPERTIES_CHANGE_EVENT));
};

// Fonction pour initialiser les données si elles n'existent pas
const initializeData = () => {
  const properties = localStorage.getItem(STORAGE_KEY);
  if (!properties) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProperties));
  }
};

export const propertyService = {
  getAll: (): Property[] => {
    initializeData(); // Initialiser les données si nécessaire
    const properties = localStorage.getItem(STORAGE_KEY);
    return properties ? JSON.parse(properties) : [];
  },

  add: (property: Omit<Property, 'id'>): Property => {
    const properties = propertyService.getAll();
    const newProperty = {
      ...property,
      id: crypto.randomUUID()
    };
    
    properties.push(newProperty);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
    emitChange(); // Émettre l'événement
    return newProperty;
  },

  update: (id: string, property: Omit<Property, 'id'>): Property => {
    const properties = propertyService.getAll();
    const updatedProperty = { ...property, id };
    const index = properties.findIndex(p => p.id === id);
    
    if (index !== -1) {
      properties[index] = updatedProperty;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
      emitChange(); // Émettre l'événement
    }
    
    return updatedProperty;
  },

  delete: (id: string): void => {
    const properties = propertyService.getAll();
    const filteredProperties = properties.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProperties));
    emitChange(); // Émettre l'événement
  },

  getById: (id: string): Property | undefined => {
    const properties = propertyService.getAll();
    return properties.find(p => p.id === id);
  },

  // Fonction pour s'abonner aux changements
  subscribe: (callback: () => void) => {
    window.addEventListener(PROPERTIES_CHANGE_EVENT, callback);
    return () => window.removeEventListener(PROPERTIES_CHANGE_EVENT, callback);
  }
};