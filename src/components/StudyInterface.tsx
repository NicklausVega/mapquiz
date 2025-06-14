import React, { useState, useEffect } from 'react';
import { Book, Target, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { GeographicFeature, StudySession, StudyMode } from '../types/geography';
import { examFeatures } from '../data/geographyFeatures';

interface StudyInterfaceProps {
  mode: StudyMode;
  onModeChange: (mode: StudyMode) => void;
  session: StudySession;
  onSessionUpdate: (session: StudySession) => void;
  currentFeature: GeographicFeature | null;
  onFeatureSelect: (feature: GeographicFeature | null) => void;
}

const StudyInterface: React.FC<StudyInterfaceProps> = ({
  mode,
  onModeChange,
  session,
  onSessionUpdate,
  currentFeature,
  onFeatureSelect
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [practiceFeatures, setPracticeFeatures] = useState<GeographicFeature[]>([]);

  useEffect(() => {
    if (mode === 'practice' || mode === 'exam') {
      const interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - session.timeStarted.getTime()) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [mode, session.timeStarted]);

  useEffect(() => {
    if (mode === 'practice' || mode === 'exam') {
      // Shuffle and select 25 random features for practice/exam
      const shuffled = [...examFeatures].sort(() => Math.random() - 0.5);
      setPracticeFeatures(shuffled.slice(0, 25));
      
      if (session.currentQuestion === 0) {
        onFeatureSelect(shuffled[0]);
        onSessionUpdate({
          ...session,
          totalQuestions: 25,
          timeStarted: new Date()
        });
      }
    }
  }, [mode]);

  const handleCorrectAnswer = () => {
    if (!currentFeature) return;

    const newCorrectAnswers = [...session.correctAnswers, currentFeature.id];
    const newCurrentQuestion = session.currentQuestion + 1;

    onSessionUpdate({
      ...session,
      correctAnswers: newCorrectAnswers,
      score: newCorrectAnswers.length,
      currentQuestion: newCurrentQuestion
    });

    if (newCurrentQuestion < practiceFeatures.length) {
      onFeatureSelect(practiceFeatures[newCurrentQuestion]);
    } else {
      // Quiz complete
      onFeatureSelect(null);
    }
  };

  const handleIncorrectAnswer = (selectedFeature: GeographicFeature) => {
    if (!currentFeature) return;

    const newIncorrectAnswers = [...session.incorrectAnswers, selectedFeature.id];
    const newCurrentQuestion = session.currentQuestion + 1;

    onSessionUpdate({
      ...session,
      incorrectAnswers: newIncorrectAnswers,
      currentQuestion: newCurrentQuestion
    });

    if (newCurrentQuestion < practiceFeatures.length) {
      onFeatureSelect(practiceFeatures[newCurrentQuestion]);
    } else {
      // Quiz complete
      onFeatureSelect(null);
    }
  };

  const resetSession = () => {
    onSessionUpdate({
      score: 0,
      totalQuestions: 0,
      currentQuestion: 0,
      timeStarted: new Date(),
      correctAnswers: [],
      incorrectAnswers: []
    });
    onFeatureSelect(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScorePercentage = () => {
    return session.totalQuestions > 0 ? Math.round((session.score / session.totalQuestions) * 100) : 0;
  };

  const isComplete = session.currentQuestion >= session.totalQuestions && session.totalQuestions > 0;
  const isPassing = getScorePercentage() >= 80;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Mode Selection */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { onModeChange('study'); resetSession(); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'study' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Book size={18} />
          Study Mode
        </button>
        <button
          onClick={() => { onModeChange('practice'); resetSession(); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'practice' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Target size={18} />
          Practice Mode
        </button>
        <button
          onClick={() => { onModeChange('exam'); resetSession(); }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'exam' 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Clock size={18} />
          Exam Mode
        </button>
      </div>

      {/* Study Mode Content */}
      {mode === 'study' && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Study All Features ({examFeatures.length} total)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
            {examFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => onFeatureSelect(feature)}
                className={`text-left p-2 rounded border text-sm transition-colors ${
                  currentFeature?.id === feature.id
                    ? 'bg-blue-100 border-blue-300 text-blue-800'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="font-medium">{feature.name}</div>
                <div className="text-xs text-gray-500 capitalize">{feature.type}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Practice/Exam Mode Content */}
      {(mode === 'practice' || mode === 'exam') && (
        <div>
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {Math.min(session.currentQuestion + 1, session.totalQuestions)} of {session.totalQuestions}
              </span>
              <span className="text-sm text-gray-500">
                Score: {session.score}/{session.totalQuestions} ({getScorePercentage()}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(session.currentQuestion / session.totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm text-gray-600">Time: {formatTime(timeElapsed)}</span>
          </div>

          {/* Current Question */}
          {currentFeature && !isComplete && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Locate: {currentFeature.name}
              </h3>
              <p className="text-sm text-blue-600 capitalize">
                Type: {currentFeature.type}
              </p>
              <p className="text-sm text-blue-600 mt-1">
                Click on the location on the map above
              </p>
            </div>
          )}

          {/* Quiz Complete */}
          {isComplete && (
            <div className={`border rounded-lg p-6 ${isPassing ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="text-center">
                {isPassing ? (
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                ) : (
                  <XCircle size={48} className="text-red-500 mx-auto mb-4" />
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${isPassing ? 'text-green-800' : 'text-red-800'}`}>
                  {isPassing ? 'Congratulations! You Passed!' : 'Study More and Try Again'}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-lg">
                    Score: <span className="font-bold">{session.score}/25 ({getScorePercentage()}%)</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Passing score: 20/25 (80%)
                  </p>
                  <p className="text-sm text-gray-600">
                    Time taken: {formatTime(timeElapsed)}
                  </p>
                </div>

                <button
                  onClick={resetSession}
                  className="flex items-center gap-2 mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <RotateCcw size={18} />
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons (for practice mode) */}
          {mode === 'practice' && currentFeature && !isComplete && (
            <div className="flex gap-2">
              <button
                onClick={handleCorrectAnswer}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <CheckCircle size={18} />
                Correct
              </button>
              <button
                onClick={() => handleIncorrectAnswer(currentFeature)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <XCircle size={18} />
                Skip
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudyInterface;