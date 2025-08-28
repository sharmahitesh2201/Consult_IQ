
import React, { useState } from 'react';
import ContentCard from '../components/ContentCard';
import { SAMPLE_FRAMEWORKS } from '../constants';
import { Framework } from '../types';

const FrameworksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const types = Array.from(new Set(SAMPLE_FRAMEWORKS.map(fw => fw.type).filter(Boolean)));

  const filteredFrameworks = SAMPLE_FRAMEWORKS.filter((fw: Framework) => {
    return (
      fw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fw.summary.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (selectedType ? fw.type === selectedType : true);
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Consulting Frameworks</h2>
        <p className="text-lg text-gray-600">Master essential frameworks to structure your thinking and solve complex business problems.</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search frameworks..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search frameworks"
        />
        <select
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none w-full md:w-auto bg-white"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          aria-label="Filter by type"
        >
          <option value="">All Types</option>
          {types.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>

      {filteredFrameworks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((fw) => (
            <ContentCard key={fw.id} resource={fw} resourceType="framework" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <img src="https://illustrations.popsy.co/gray/brainstorming.svg" alt="No results" className="mx-auto mb-6 h-40 w-40" />
          <p className="text-xl text-gray-700 font-semibold">No Frameworks Found</p>
          <p className="text-gray-500">Try adjusting your search or filters to discover new frameworks.</p>
        </div>
      )}
    </div>
  );
};

export default FrameworksPage;
    