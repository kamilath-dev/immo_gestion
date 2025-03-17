import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos de Nous</h2>
          <p className="text-gray-600">
            Plus de 50 ans d'expertise dans l'immobilier à votre service.
          </p>
        </motion.div>

        <div className="prose prose-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Notre Histoire</h3>
            <p className="mb-6">
              Fondée en 1970, ImmoGestion s'est imposée comme l'un des leaders du marché immobilier en France. 
              Notre engagement envers l'excellence et la satisfaction client nous a permis de construire une 
              réputation solide dans le secteur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Notre Mission</h3>
            <p className="mb-6">
              Notre mission est de faciliter l'accès à la propriété et d'accompagner nos clients dans leurs 
              projets immobiliers avec professionnalisme et transparence. Nous nous engageons à fournir un 
              service personnalisé et des solutions adaptées à chaque situation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg mb-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Nos Valeurs</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Excellence et professionnalisme</li>
              <li>Transparence et intégrité</li>
              <li>Innovation et adaptabilité</li>
              <li>Engagement envers nos clients</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}