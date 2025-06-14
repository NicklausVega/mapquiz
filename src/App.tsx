import React, { useState } from 'react';
import { Map, GraduationCap, Info } from 'lucide-react';
import USMap from './components/USMap';
import StudyInterface from './components/StudyInterface';
import FeatureList from './components/FeatureList';
import { GeographicFeature, StudySession, StudyMode } from './types/geography';
import { examFeatures } from './data/geographyFeatures';

function App() {
  const [currentView, setCurrentView] = useState<'map' | 'list'>('map');
  const [studyMode, setStudyMode] = useState<StudyMode>('study');
  const [selectedFeature, setSelectedFeature] = useState<GeographicFeature | null>(null);
  const [studySession, setStudySession] = useState<StudySession>({
    score: 0,
    totalQuestions: 0,
    currentQuestion: 0,
    timeStarted: new Date(),
    correctAnswers: [],
    incorrectAnswers: []
  });

  const handleMapClick = (feature: GeographicFeature) => {
    if (studyMode === 'study') {
      setSelectedFeature(feature);
    } else if (studyMode === 'practice' || studyMode === 'exam') {
      // In practice/exam mode, check if clicked feature is correct
      if (selectedFeature && feature.id === selectedFeature.id) {
        // Correct answer
        const newCorrectAnswers = [...studySession.correctAnswers, feature.id];
        const newCurrentQuestion = studySession.currentQuestion + 1;
        
        setStudySession({
          ...studySession,
          correctAnswers: newCorrectAnswers,
          score: newCorrectAnswers.length,
          currentQuestion: newCurrentQuestion
        });

        // Move to next question or complete
        if (newCurrentQuestion < 25) {
          const remainingFeatures = examFeatures.filter(f => 
            !newCorrectAnswers.includes(f.id) && 
            !studySession.incorrectAnswers.includes(f.id)
          );
          if (remainingFeatures.length > 0) {
            const nextFeature = remainingFeatures[Math.floor(Math.random() * remainingFeatures.length)];
            setSelectedFeature(nextFeature);
          }
        } else {
          setSelectedFeature(null);
        }
      } else {
        // Incorrect answer
        const newIncorrectAnswers = [...studySession.incorrectAnswers, feature.id];
        const newCurrentQuestion = studySession.currentQuestion + 1;
        
        setStudySession({
          ...studySession,
          incorrectAnswers: newIncorrectAnswers,
          currentQuestion: newCurrentQuestion
        });

        // Move to next question or complete
        if (newCurrentQuestion < 25) {
          const remainingFeatures = examFeatures.filter(f => 
            !studySession.correctAnswers.includes(f.id) && 
            !newIncorrectAnswers.includes(f.id)
          );
          if (remainingFeatures.length > 0) {
            const nextFeature = remainingFeatures[Math.floor(Math.random() * remainingFeatures.length)];
            setSelectedFeature(nextFeature);
          }
        } else {
          setSelectedFeature(null);
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MAP EXAM Study Tool</h1>
                <p className="text-sm text-gray-600">US Geography Practice & Study</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView('map')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'map'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Map size={18} />
                Map View
              </button>
              <button
                onClick={() => setCurrentView('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentView === 'list'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Info size={18} />
                Feature List
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'map' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <USMap
                onLocationClick={handleMapClick}
                selectedFeature={selectedFeature}
                correctAnswers={studySession.correctAnswers}
                incorrectAnswers={studySession.incorrectAnswers}
                features={examFeatures}
                showLabels={studyMode === 'study'}
              />
              
              {/* Selected Feature Info */}
              {selectedFeature && studyMode === 'study' && (
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{selectedFeature.name}</h3>
                  <p className="text-gray-600 capitalize">Type: {selectedFeature.type}</p>
                  {selectedFeature.description && (
                    <p className="text-gray-600 mt-2">{selectedFeature.description}</p>
                  )}
                </div>
              )}
            </div>

            {/* Study Interface */}
            <div className="lg:col-span-1">
              <StudyInterface
                mode={studyMode}
                onModeChange={setStudyMode}
                session={studySession}
                onSessionUpdate={setStudySession}
                currentFeature={selectedFeature}
                onFeatureSelect={setSelectedFeature}
              />
            </div>
          </div>
        ) : (
          <FeatureList
            onFeatureSelect={setSelectedFeature}
            selectedFeature={selectedFeature}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Study tool for US Geography MAP EXAM • Practice identifying all 75+ geographic features
            </p>
            <p className="text-xs mt-2">
              Remember: You need 80% (20/25) to pass • Use Respondus Lockdown Browser for the actual exam
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;