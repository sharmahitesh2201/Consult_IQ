
import React, { useState } from 'react';
import ContentCard from '../components/ContentCard';
import { SAMPLE_CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const industries = Array.from(new Set(SAMPLE_CASE_STUDIES.map(cs => cs.industry).filter(Boolean)));
  const difficulties = Array.from(new Set(SAMPLE_CASE_STUDIES.map(cs => cs.difficulty).filter(d => d !== undefined))) as string[];


  const filteredCaseStudies = SAMPLE_CASE_STUDIES.filter((cs: CaseStudy) => {
    return (
      cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (selectedIndustry ? cs.industry === selectedIndustry : true) &&
    (selectedDifficulty ? cs.difficulty === selectedDifficulty : true);
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Case Studies</h2>
        <p className="text-lg text-gray-600">Explore a variety of consulting case studies to build your analytical and problem-solving skills.</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search cases..."
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search case studies"
        />
        <select
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none w-full md:w-auto bg-white"
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          aria-label="Filter by industry"
        >
          <option value="">All Industries</option>
          {industries.map(industry => <option key={industry} value={industry}>{industry}</option>)}
        </select>
        <select
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none w-full md:w-auto bg-white"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          aria-label="Filter by difficulty"
        >
          <option value="">All Difficulties</option>
          {difficulties.map(difficulty => <option key={difficulty} value={difficulty}>{difficulty}</option>)}
        </select>
      </div>

      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((cs) => (
            <ContentCard key={cs.id} resource={cs} resourceType="case" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <img src="https://illustrations.popsy.co/gray/problem-solving.svg" alt="No results" className="mx-auto mb-6 h-40 w-40" />
          <p className="text-xl text-gray-700 font-semibold">No Case Studies Found</p>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
    