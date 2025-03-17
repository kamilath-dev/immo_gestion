import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/properties', label: 'Propriétés' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'À Propos' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative px-1 py-2 text-sm font-medium ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {label}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  initial={false}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}