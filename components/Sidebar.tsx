
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, ChartBarIcon } from '../constants'; // Using ChartBarIcon as the main logo

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white text-gray-700 flex flex-col h-full shadow-md border-r border-gray-200">
      <div className="p-6 flex items-center space-x-3 border-b border-gray-200">
        <ChartBarIcon className="w-10 h-10 text-red-600" />
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">ConsultIQ</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1.5">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2.5 rounded-md transition-colors duration-150 group ${
                isActive 
                  ? 'bg-red-100 text-red-700 font-medium shadow-sm' 
                  : 'text-gray-600 hover:bg-red-50 hover:text-red-700'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} ConsultIQ
        </p>
      </div>
    </div>
  );
};

export default Sidebar;