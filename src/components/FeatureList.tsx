import React from 'react';
import { GeographicFeature } from '../types/geography';
import { examFeatures } from '../data/geographyFeatures';

interface FeatureListProps {
  onFeatureSelect: (feature: GeographicFeature) => void;
  selectedFeature?: GeographicFeature | null;
}

const FeatureList: React.FC<FeatureListProps> = ({ onFeatureSelect, selectedFeature }) => {
  const groupedFeatures = examFeatures.reduce((acc, feature) => {
    if (!acc[feature.type]) {
      acc[feature.type] = [];
    }
    acc[feature.type].push(feature);
    return acc;
  }, {} as Record<string, GeographicFeature[]>);

  const typeOrder = ['state', 'city', 'river', 'lake', 'ocean', 'mountain', 'region', 'bay', 'coordinate', 'country'];
  const typeLabels = {
    state: 'States (50)',
    city: 'Cities',
    river: 'Rivers',
    lake: 'Great Lakes',
    ocean: 'Oceans & Seas',
    mountain: 'Mountain Ranges',
    region: 'Geographic Regions',
    bay: 'Bays',
    coordinate: 'Coordinates',
    country: 'Countries'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        MAP EXAM Features ({examFeatures.length} total)
      </h2>
      
      <div className="space-y-6 max-h-96 overflow-y-auto">
        {typeOrder.map((type) => {
          const features = groupedFeatures[type];
          if (!features || features.length === 0) return null;

          return (
            <div key={type}>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 sticky top-0 bg-white py-1">
                {typeLabels[type as keyof typeof typeLabels]} ({features.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => onFeatureSelect(feature)}
                    className={`text-left p-2 rounded border text-sm transition-colors ${
                      selectedFeature?.id === feature.id
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Exam Information:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 25 random features will be selected for the actual exam</li>
          <li>• Passing score is 80% (20 out of 25 correct)</li>
          <li>• Use Respondus Lockdown Browser for the actual exam</li>
          <li>• Study all features as any could appear on the exam</li>
        </ul>
      </div>
    </div>
  );
};

export default FeatureList;