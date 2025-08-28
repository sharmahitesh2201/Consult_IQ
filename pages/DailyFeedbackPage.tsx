
import React from 'react';
import { Link } from 'react-router-dom'; 
import { SparklesIcon } from '../constants'; // Assuming SparklesIcon is for Daily Feedback

const DailyFeedbackPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Daily Feedback & Insights</h2>
        <p className="text-lg text-gray-600">
          Your personalized tips and insights from the ConsultIQ AI Coach.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <SparklesIcon className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">Feedback Coming Soon!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          As you complete more practice sessions and interact with the AI Coach, this section will populate with personalized feedback, tips, and areas to focus on. Keep practicing to unlock your daily insights!
        </p>
        <div className="mt-8">
          <Link to="/practice-arena" className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Go to Practice Arena
          </Link>
        </div>
      </div>

       {/* Example of what a feedback card might look like later */}
      <div className="mt-10 opacity-50 pointer-events-none" aria-hidden="true">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Example Insight (Future Feature)</h4>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
            <div className="flex items-start space-x-3">
                <SparklesIcon className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1"/>
                <div>
                    <h5 className="text-md font-semibold text-gray-800">Focus on Quant Accuracy</h5>
                    <p className="text-sm text-gray-600 mt-1">
                        In your recent "Coffee Shop Profitability" practice, you structured the problem well, but there were minor calculation errors in estimating the impact of price changes. Double-checking your math, especially under pressure, can significantly boost your score. Try using the AI Coach to walk through a quantitative drill.
                    </p>
                </div>
            </div>
        </div>
      </div>


    </div>
  );
};

export default DailyFeedbackPage;