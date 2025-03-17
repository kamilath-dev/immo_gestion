import { motion } from 'framer-motion';
import { Home, Key, FileText, Users, Calculator, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Achat et Vente',
      description: 'Accompagnement personnalisé pour l\'achat ou la vente de votre bien'
    },
    {
      icon: Key,
      title: 'Location',
      description: 'Gestion locative complète et recherche de locataires qualifiés'
    },
    {
      icon: FileText,
      title: 'Conseil Juridique',
      description: 'Expertise juridique pour sécuriser vos transactions immobilières'
    },
    {
      icon: Users,
      title: 'Conciergerie',
      description: 'Service de conciergerie premium pour vos biens immobiliers'
    },
    {
      icon: Calculator,
      title: 'Estimation',
      description: 'Estimation précise de votre bien immobilier'
    },
    {
      icon: Shield,
      title: 'Assurance',
      description: 'Solutions d\'assurance adaptées à vos besoins immobiliers'
    }
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez notre gamme complète de services immobiliers professionnels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <service.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}