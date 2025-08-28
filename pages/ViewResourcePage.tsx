
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BaseResource, CaseStudy, Framework, PracticeScenario } from '../types';
import { SAMPLE_CASE_STUDIES, SAMPLE_FRAMEWORKS, SAMPLE_PRACTICE_SCENARIOS, StarIcon } from '../constants';
import LoadingSpinner from '../components/LoadingSpinner';
import { marked } from 'marked';

const ViewResourcePage: React.FC = () => {
  const { type, id } = useParams<{ type: 'case' | 'framework' | 'practice'; id: string }>();
  const [resource, setResource] = useState<BaseResource | null | undefined>(undefined);
  const [myNotes, setMyNotes] = useState(''); // For practice scenarios
  const navigate = useNavigate();

  useEffect(() => {
    let foundResource: BaseResource | undefined;
    if (type === 'case') {
      foundResource = SAMPLE_CASE_STUDIES.find(cs => cs.id === id) as CaseStudy | undefined;
    } else if (type === 'framework') {
      foundResource = SAMPLE_FRAMEWORKS.find(fw => fw.id === id) as Framework | undefined;
    } else if (type === 'practice') {
      foundResource = SAMPLE_PRACTICE_SCENARIOS.find(ps => ps.id === id) as PracticeScenario | undefined;
    }
    
    setTimeout(() => {
        setResource(foundResource || null);
    }, 300);
  }, [type, id]);

  const renderDifficultyBadge = (difficulty?: string) => {
    if (!difficulty) return null;
    let badgeColor = '';
    switch (difficulty) {
      case 'Beginner': badgeColor = 'bg-green-100 text-green-800'; break;
      case 'Intermediate': badgeColor = 'bg-yellow-100 text-yellow-800'; break;
      case 'Advanced': badgeColor = 'bg-red-100 text-red-800'; break;
      default: badgeColor = 'bg-slate-100 text-slate-700';
    }
    return <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${badgeColor}`}>{difficulty}</span>;
  };

  const renderStars = (rating?: number) => {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) return null;
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
    );
  };

  if (resource === undefined) {
    return <div className="flex justify-center items-center h-64"><LoadingSpinner text="Loading resource..." /></div>;
  }

  if (resource === null) {
    return (
      <div className="text-center py-10 bg-white p-8 rounded-xl shadow-xl max-w-md mx-auto">
        <img src="https://illustrations.popsy.co/slate/warning.svg" alt="Not Found" className="mx-auto mb-6 h-32 w-32" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Resource Not Found</h2>
        <p className="text-gray-500 mb-6">The requested resource could not be located.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Go Back
        </button>
      </div>
    );
  }
  
  const parsedContent = marked.parse(resource.content || '');

  return (
    <div className="bg-white p-5 sm:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
      <div className="mb-6 pb-4 border-b border-gray-200">
        {resource.category && (
          <p className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wider mb-1">
            {resource.category}
          </p>
        )}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{resource.title}</h1>
        
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 gap-y-2 mb-3 text-sm">
            {renderDifficultyBadge(resource.difficulty)}
            {(resource as CaseStudy).industry && <span className="text-gray-500">Industry: <span className="font-medium text-gray-700">{(resource as CaseStudy).industry}</span></span>}
            {(resource as Framework).type && <span className="text-gray-500">Type: <span className="font-medium text-gray-700">{(resource as Framework).type}</span></span>}
            {resource.estimatedTime && <span className="text-gray-500">Est. Time: <span className="font-medium text-gray-700">{resource.estimatedTime}</span></span>}
        </div>
         {resource.rating !== undefined && (
            <div className="mb-3 flex items-center space-x-2">
                {renderStars(resource.rating)}
                <span className="text-xs text-gray-500">({resource.rating}/5 stars)</span>
            </div>
        )}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {resource.tags.map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="prose prose-lg max-w-none 
                      prose-headings:text-gray-800 prose-headings:font-semibold
                      prose-p:text-gray-700 prose-p:leading-relaxed
                      prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-800
                      prose-ul:list-disc prose-ul:ml-1 prose-ul:pl-5 prose-li:text-gray-700
                      prose-ol:list-decimal prose-ol:ml-1 prose-ol:pl-5 prose-li:text-gray-700
                      prose-code:bg-slate-100 prose-code:p-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-red-700
                      prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
           dangerouslySetInnerHTML={{ __html: parsedContent }} />

      {type === 'practice' && (
        <>
          <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-2">Ready to Practice?</h3>
            <p className="text-gray-700">
              Use the <strong className="text-red-700">AI Coach</strong> (chat icon at the bottom-right) to work through this scenario, ask questions, and get feedback! Use the notes section below to structure your thoughts.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">My Notes</h3>
            <textarea
              value={myNotes}
              onChange={(e) => setMyNotes(e.target.value)}
              placeholder="Jot down your thoughts, structure, and calculations here..."
              className="w-full h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow resize-y"
            />
          </div>
        </>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          &larr; Back to List
        </button>
      </div>
    </div>
  );
};

export default ViewResourcePage;