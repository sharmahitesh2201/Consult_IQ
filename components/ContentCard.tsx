
import React from 'react';
import { Link } from 'react-router-dom';
import { BaseResource } from '../types';
import { StarIcon } from '../constants'; // Assuming StarIcon is exported from constants

interface ContentCardProps {
  resource: BaseResource;
  resourceType: 'case' | 'framework' | 'practice';
}

const ContentCard: React.FC<ContentCardProps> = ({ resource, resourceType }) => {
  const difficultyColor = (difficulty?: string): string => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (rating?: number) => {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) return null;
    const fullStars = Math.floor(rating);
    // const halfStar = rating % 1 !== 0; // Not implementing half stars for simplicity here
    const emptyStars = 5 - fullStars; // - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className="w-4 h-4 text-yellow-400" />
        ))}
        {/* {halfStar && <StarHalfIcon className="w-4 h-4 text-yellow-400" />} */}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <Link to={`/view/${resourceType}/${resource.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            {resource.category && (
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                {resource.category}
              </span>
            )}
            {resource.difficulty && (
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${difficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
            {resource.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 flex-grow line-clamp-3">
            {resource.summary}
          </p>
          
          <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 mb-3">
            {resource.estimatedTime && <span>{resource.estimatedTime}</span>}
            {resource.rating !== undefined && renderStars(resource.rating)}
          </div>

          {resource.tags && resource.tags.length > 0 && (
            <div className="mb-4">
              {resource.tags.slice(0, 3).map(tag => ( // Show max 3 tags for brevity
                <span key={tag} className="inline-block bg-slate-100 text-slate-600 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto pt-3">
             <span className="text-sm font-semibold text-red-600 group-hover:text-red-700 group-hover:underline transition-colors">
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;