
import React from 'react';
import { Link } from 'react-router-dom';
import { SAMPLE_SCORE_TREND_DATA, SAMPLE_SKILL_DATA, SAMPLE_SESSION_HISTORY, BookOpenIcon, CommandLineIcon } from '../constants';
import { ScoreTrendPoint, SkillDataItem, SessionHistoryItem } from '../types';

// SVG Line Chart for Score Trend
const ScoreTrendChart: React.FC<{ data: ScoreTrendPoint[] }> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-6 rounded-lg shadow aspect-[16/7] flex justify-center items-center text-gray-500">No score data available.</div>;
  }

  const width = 500;
  const height = 250;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const scores = data.map(d => d.score);
  const minScore = 0; //Math.min(...scores);
  const maxScore = 100; //Math.max(...scores);

  const getX = (index: number) => padding + (index / (data.length - 1)) * chartWidth;
  const getY = (score: number) => height - padding - ((score - minScore) / (maxScore - minScore)) * chartHeight;

  const linePath = data.map((point, index) => {
    const x = getX(index);
    const y = getY(point.score);
    return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
  }).join(' ');

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Score Trend Over Time</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#d1d5db" strokeWidth="1" />
        {[0, 25, 50, 75, 100].map(val => (
          <text key={`y-label-${val}`} x={padding - 10} y={getY(val) + 5} textAnchor="end" fontSize="10" fill="#6b7280">
            {val}
          </text>
        ))}
        {/* X-axis */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#d1d5db" strokeWidth="1" />
        {data.length > 0 && (
            <>
                <text x={padding} y={height - padding + 15} textAnchor="start" fontSize="10" fill="#6b7280">
                    {new Date(data[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </text>
                <text x={width - padding} y={height - padding + 15} textAnchor="end" fontSize="10" fill="#6b7280">
                    {new Date(data[data.length - 1].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </text>
            </>
        )}


        {/* Data Line */}
        <path d={linePath} fill="none" stroke="#ef4444" strokeWidth="2" />
        {/* Data Points */}
        {data.map((point, index) => (
          <circle key={index} cx={getX(index)} cy={getY(point.score)} r="3" fill="#ef4444" />
        ))}
      </svg>
    </div>
  );
};


// SVG Bar Chart for Skills Breakdown
const SkillsBreakdownChart: React.FC<{ data: SkillDataItem[] }> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="bg-white p-6 rounded-lg shadow aspect-[16/10] flex justify-center items-center text-gray-500">No skill data available.</div>;
  }

  const width = 500;
  const barHeight = 20;
  const barGap = 15;
  const labelWidth = 150; // Space for labels
  const scoreWidth = 40; // Space for score text
  const chartPadding = 20; // Padding around the chart elements
  const totalBarHeight = barHeight + barGap;
  const height = data.length * totalBarHeight + 2 * chartPadding - barGap; // Adjusted height
  const chartAreaWidth = width - labelWidth - scoreWidth - 2 * chartPadding;


  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Skills Breakdown (Overview)</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {data.map((item, index) => {
          const barX = chartPadding + labelWidth;
          const barY = chartPadding + index * totalBarHeight;
          const barWidthValue = (item.score / 100) * chartAreaWidth;

          return (
            <g key={item.skill}>
              <text x={chartPadding} y={barY + barHeight / 2 + 5} fontSize="12" fill="#374151" textAnchor="start">
                {item.skill}
              </text>
              <rect
                x={barX}
                y={barY}
                width={barWidthValue}
                height={barHeight}
                fill="#ef4444"
                rx="3"
                ry="3"
              />
              <text
                x={barX + barWidthValue + 5}
                y={barY + barHeight / 2 + 5}
                fontSize="11"
                fill="#4b5563"
                textAnchor="start"
              >
                {item.score}%
              </text>
            </g>
          );
        })}
      </svg>
        {/* Detailed List (kept for clarity and specific numbers) */}
        <ul className="mt-6 space-y-3">
            {data.map(item => (
            <li key={`${item.skill}-detail`} className="text-sm">
                <div className="flex justify-between mb-1">
                <span className="text-gray-600">{item.skill}</span>
                <span className="text-red-600 font-medium">{item.score}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${item.score}%` }}></div>
                </div>
            </li>
            ))}
        </ul>
    </div>
  );
};


const MyProgressPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Progress</h2>
        <p className="text-lg text-gray-600">
          Track your improvement, identify strengths & weaknesses, and review past feedback.
        </p>
      </div>

      {/* Score Trend and Skills Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScoreTrendChart data={SAMPLE_SCORE_TREND_DATA} />
        <SkillsBreakdownChart data={SAMPLE_SKILL_DATA} />
      </div>

      {/* Session History */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Session History</h3>
        {SAMPLE_SESSION_HISTORY.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case/Practice Title</th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {SAMPLE_SESSION_HISTORY.map((session: SessionHistoryItem) => (
                  <tr key={session.id} className="hover:bg-slate-50 transition-colors duration-150">
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{session.date}</td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{session.caseTitle}</td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        session.type === 'case' ? 'bg-red-100 text-red-700' : 'bg-sky-100 text-sky-700'
                      }`}>
                        {session.type === 'case' ? 
                          <BookOpenIcon className="w-3.5 h-3.5 mr-1.5"/> : 
                          <CommandLineIcon className="w-3.5 h-3.5 mr-1.5"/>
                        }
                        {session.type}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`font-semibold ${session.score >= 80 ? 'text-emerald-600' : session.score >=60 ? 'text-amber-600' : 'text-red-600'}`}>
                            {session.score}%
                        </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/view/${session.type}/${session.resourceId}`} className="text-red-600 hover:text-red-700 hover:underline">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <img src="https://illustrations.popsy.co/slate/analytics.svg" alt="No history" className="mx-auto mb-6 h-32 w-32" />
            <p className="text-gray-500">No practice sessions recorded yet. Start practicing to see your progress!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProgressPage;
