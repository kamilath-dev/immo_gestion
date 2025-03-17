import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import AdminRoute from './components/AdminRoute';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import PropertyForm from './pages/admin/PropertyForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">ImmoGestion</h1>
            </div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Routes Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/properties/new"
            element={
              <AdminRoute>
                <PropertyForm />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/properties/edit/:id"
            element={
              <AdminRoute>
                <PropertyForm />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ImmoGestion</h3>
              <p className="text-gray-400">
                Votre partenaire de confiance dans l'immobilier depuis 1970.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/properties" className="hover:text-white transition-colors">
                    Propriétés
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Rue de la Paix</li>
                <li>75000 Paris</li>
                <li>+33 1 23 45 67 89</li>
                <li>contact@immogestion.fr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Inscrivez-vous pour recevoir nos dernières offres et actualités.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}