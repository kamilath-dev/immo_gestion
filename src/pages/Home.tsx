import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, Award, Users, Building, BarChart as ChartBar, MapPin, Phone, Mail, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] -mt-24 mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Votre Partenaire <span className="text-blue-400">Immobilier</span> de Confiance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-gray-200"
            >
              Des milliers de propriétés vous attendent. Trouvez celle qui vous correspond.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/properties"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                Explorer nos biens <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-8 bg-white shadow-md relative -mt-24 z-10 rounded-xl max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4"
          >
            <Phone className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold">Appelez-nous</h3>
              <p className="text-gray-600">+33 1 23 45 67 89</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <Mail className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold">Envoyez-nous un email</h3>
              <p className="text-gray-600">contact@immogestion.fr</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Clock className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold">Horaires d'ouverture</h3>
              <p className="text-gray-600">Lun-Ven: 9h-19h</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1500+', label: 'Biens vendus' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '50+', label: 'Années d\'expérience' },
              { number: '24/7', label: 'Support client' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-500/20 p-6 rounded-lg"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Pourquoi Nous Choisir
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez ce qui fait notre différence et pourquoi nos clients nous font confiance depuis plus de 50 ans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Expertise Reconnue',
                description: 'Plus de 50 ans d\'expérience dans l\'immobilier'
              },
              {
                icon: Users,
                title: 'Service Personnalisé',
                description: 'Un accompagnement sur mesure pour chaque client'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Des services primés et une satisfaction client maximale'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Principaux */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Nos Services Premium
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services immobiliers pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: 'Gestion Locative',
                description: 'Gestion complète de vos biens locatifs',
                features: ['Recherche de locataires', 'Gestion des loyers', 'Maintenance']
              },
              {
                icon: ChartBar,
                title: 'Investissement',
                description: 'Conseils en investissement immobilier',
                features: ['Analyse de marché', 'Optimisation fiscale', 'Rentabilité']
              },
              {
                icon: Award,
                title: 'Expertise',
                description: 'Évaluation précise de votre bien',
                features: ['Estimation détaillée', 'Analyse comparative', 'Rapport complet']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biens en Vedette */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Biens en Vedette
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos plus belles propriétés sélectionnées pour vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
                title: 'Villa de Luxe',
                price: '1 250 000 €',
                location: 'Bordeaux Centre',
                features: ['5 chambres', '350 m²', 'Piscine']
              },
              {
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                title: 'Appartement Modern',
                price: '450 000 €',
                location: 'Chartrons',
                features: ['3 chambres', '95 m²', 'Terrasse']
              },
              {
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
                title: 'Maison Contemporaine',
                price: '850 000 €',
                location: 'Caudéran',
                features: ['4 chambres', '180 m²', 'Jardin']
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Coup de cœur
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{property.price}</span>
                    <Link 
                      to="/properties"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Prêt à Trouver Votre Bien Idéal ?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Nos experts sont là pour vous accompagner dans votre projet immobilier.
            </p>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Commencer Maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}