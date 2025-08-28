import React from 'react';
import ContentCard from '../components/ContentCard';
import { SAMPLE_PRACTICE_SCENARIOS } from '../constants';
// import ChatWindow from '../components/ChatWindow'; // Chat is now global

const PracticeArenaPage: React.FC = () => {
  // const [selectedScenario, setSelectedScenario] = useState<PracticeScenario | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Practice Arena</h2>
        <p className="text-lg text-gray-600">
          Sharpen your problem-solving skills. Select a scenario and use the AI Coach (chat icon bottom-right) for guidance.
        </p>
      </div>

      {SAMPLE_PRACTICE_SCENARIOS.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PRACTICE_SCENARIOS.map(scenario => (
            // Clicking will navigate to a detailed view where they can read and use the global chat
            <ContentCard key={scenario.id} resource={scenario} resourceType="practice" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <img src="https://illustrations.popsy.co/gray/hiring-decision.svg" alt="No practice scenarios" className="mx-auto mb-6 h-40 w-40" />
          <p className="text-xl text-gray-700 font-semibold">No Practice Scenarios Yet</p>
          <p className="text-gray-500">Check back soon for new challenges to test your skills!</p>
        </div>
      )}

      {/* 
        If a scenario were selected to be shown on this page itself:
        {selectedScenario && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">{selectedScenario.title}</h3>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Objective:</span> {selectedScenario.objective}</p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: marked.parse(selectedScenario.content) }} />
          <p className="mt-4 text-sm text-sky-600 font-medium">
            Use the AI Coach (chat icon bottom-right) to work through this scenario!
          </p>
        </div>
      )} */}
    </div>
  );
};

export default PracticeArenaPage;