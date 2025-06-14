import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { GeographicFeature } from '../types/geography';
import { geoAlbersUsa } from 'd3-geo';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface USMapProps {
  onLocationClick: (feature: GeographicFeature) => void;
  selectedFeature?: GeographicFeature | null;
  correctAnswers: string[];
  incorrectAnswers: string[];
  features: GeographicFeature[];
  showLabels?: boolean;
}

const USMap: React.FC<USMapProps> = ({ 
  onLocationClick, 
  selectedFeature, 
  correctAnswers, 
  incorrectAnswers, 
  features,
  showLabels = false 
}) => {
  // Safety check: ensure features is a valid array
  if (!Array.isArray(features) || features.length === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center text-gray-500">
          <p>Loading map data...</p>
        </div>
      </div>
    );
  }

  const getFeatureColor = (featureId: string) => {
    if (correctAnswers.includes(featureId)) return '#10B981'; // green
    if (incorrectAnswers.includes(featureId)) return '#EF4444'; // red
    if (selectedFeature?.id === featureId) return '#3B82F6'; // blue
    return '#6366F1'; // indigo
  };

  const getStateColor = (stateName: string) => {
    const stateFeature = features.find(f => 
      f.type === 'state' && 
      f.name.toLowerCase() === stateName.toLowerCase()
    );
    
    if (!stateFeature) return '#E5E7EB';
    
    if (correctAnswers.includes(stateFeature.id)) return '#10B981';
    if (incorrectAnswers.includes(stateFeature.id)) return '#EF4444';
    if (selectedFeature?.id === stateFeature.id) return '#3B82F6';
    return '#E5E7EB';
  };

  const handleStateClick = (geo: { properties: { name: string } }) => {
    const stateName = geo.properties.name;
    const stateFeature = features.find(f => 
      f.type === 'state' && 
      f.name.toLowerCase() === stateName.toLowerCase()
    );
    
    if (stateFeature) {
      onLocationClick(stateFeature);
    }
  };

  // Map dimensions & projection settings (keep in sync with <ComposableMap>)
  const MAP_WIDTH = 1000;
  const MAP_HEIGHT = 650;
  const MAP_SCALE = 1200;

  // Initialize a projection identical to the one used by <ComposableMap>. We keep this
  // in sync with the values above so the `projection([...]) !== null` check below
  // accurately reflects what will be visible in the rendered map.
  const projection = geoAlbersUsa()
    .scale(MAP_SCALE)
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-auto">
      <div>
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{
            scale: MAP_SCALE,
          }}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          className="w-full h-auto"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; properties: { name: string } }> }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  style={{
                    default: {
                      fill: getStateColor(geo.properties.name),
                      stroke: "#FFFFFF",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#F59E0B",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.75,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "#D97706",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Markers for non-state features */}
          {features
            .filter(feature => feature.type !== 'state')
            // Filter out features that either have invalid coordinates or are outside the projection's extent
            .filter(feature => {
              if (
                !feature.coordinates ||
                typeof feature.coordinates.x !== 'number' ||
                typeof feature.coordinates.y !== 'number' ||
                isNaN(feature.coordinates.x) ||
                isNaN(feature.coordinates.y)
              ) {
                return false;
              }
              // Skip markers that are outside the projection's clipping extent
              return projection([feature.coordinates.x, feature.coordinates.y]) !== null;
            })
            .map((feature) => (
              <Marker
                key={feature.id}
                coordinates={[feature.coordinates.x, feature.coordinates.y]}
                onClick={() => onLocationClick(feature)}
              >
                <circle
                  r={6}
                  fill={getFeatureColor(feature.id)}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                />
                {showLabels && (
                  <text
                    textAnchor="middle"
                    y={-10}
                    className="text-xs font-medium fill-gray-700 pointer-events-none"
                    style={{ fontSize: '10px' }}
                  >
                    {feature.name}
                  </text>
                )}
              </Marker>
            ))}
        </ComposableMap>

        {/* End of interactive map */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
          {/* Legend */}
          <div className="bg-white bg-opacity-95 rounded-lg p-4 shadow-lg border w-full sm:w-auto">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Legend</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded border"></div>
                <span className="text-xs text-gray-700">Unselected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-xs text-gray-700">Correct</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-xs text-gray-700">Incorrect</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-xs text-gray-700">Selected</span>
              </div>
            </div>
          </div>

          {/* Feature type indicators */}
          <div className="bg-white bg-opacity-95 rounded-lg p-4 shadow-lg border w-full sm:w-auto">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Feature Types</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded border"></div>
                <span className="text-xs text-gray-700">States</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Cities & Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Feature Info */}
      {selectedFeature && showLabels && (
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800">{selectedFeature.name}</h3>
          <p className="text-gray-600 capitalize">Type: {selectedFeature.type}</p>
          {selectedFeature.description && (
            <p className="text-gray-600 mt-2">{selectedFeature.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default USMap;