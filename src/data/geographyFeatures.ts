import { GeographicFeature } from '../types/geography';

export const geographyFeatures: GeographicFeature[] = [
  // States (50 states)
  { id: 'alabama', name: 'Alabama', type: 'state', coordinates: { x: -86.8, y: 32.8 } },
  { id: 'alaska', name: 'Alaska', type: 'state', coordinates: { x: -154.0, y: 64.0 } },
  { id: 'arizona', name: 'Arizona', type: 'state', coordinates: { x: -111.9, y: 34.0 } },
  { id: 'arkansas', name: 'Arkansas', type: 'state', coordinates: { x: -92.2, y: 34.7 } },
  { id: 'california', name: 'California', type: 'state', coordinates: { x: -119.4, y: 36.8 } },
  { id: 'colorado', name: 'Colorado', type: 'state', coordinates: { x: -105.5, y: 39.0 } },
  { id: 'connecticut', name: 'Connecticut', type: 'state', coordinates: { x: -72.7, y: 41.6 } },
  { id: 'delaware', name: 'Delaware', type: 'state', coordinates: { x: -75.5, y: 39.0 } },
  { id: 'florida', name: 'Florida', type: 'state', coordinates: { x: -81.5, y: 27.8 } },
  { id: 'georgia', name: 'Georgia', type: 'state', coordinates: { x: -83.5, y: 32.2 } },
  { id: 'hawaii', name: 'Hawaii', type: 'state', coordinates: { x: -157.8, y: 21.3 } },
  { id: 'idaho', name: 'Idaho', type: 'state', coordinates: { x: -114.7, y: 44.1 } },
  { id: 'illinois', name: 'Illinois', type: 'state', coordinates: { x: -89.4, y: 40.3 } },
  { id: 'indiana', name: 'Indiana', type: 'state', coordinates: { x: -86.1, y: 39.8 } },
  { id: 'iowa', name: 'Iowa', type: 'state', coordinates: { x: -93.6, y: 42.0 } },
  { id: 'kansas', name: 'Kansas', type: 'state', coordinates: { x: -98.5, y: 38.5 } },
  { id: 'kentucky', name: 'Kentucky', type: 'state', coordinates: { x: -84.9, y: 37.8 } },
  { id: 'louisiana', name: 'Louisiana', type: 'state', coordinates: { x: -91.8, y: 31.0 } },
  { id: 'maine', name: 'Maine', type: 'state', coordinates: { x: -69.8, y: 44.3 } },
  { id: 'maryland', name: 'Maryland', type: 'state', coordinates: { x: -76.5, y: 39.0 } },
  { id: 'massachusetts', name: 'Massachusetts', type: 'state', coordinates: { x: -71.5, y: 42.2 } },
  { id: 'michigan', name: 'Michigan', type: 'state', coordinates: { x: -84.5, y: 43.3 } },
  { id: 'minnesota', name: 'Minnesota', type: 'state', coordinates: { x: -95.0, y: 45.4 } },
  { id: 'mississippi', name: 'Mississippi', type: 'state', coordinates: { x: -89.7, y: 32.7 } },
  { id: 'missouri', name: 'Missouri', type: 'state', coordinates: { x: -92.6, y: 38.4 } },
  { id: 'montana', name: 'Montana', type: 'state', coordinates: { x: -110.5, y: 47.1 } },
  { id: 'nebraska', name: 'Nebraska', type: 'state', coordinates: { x: -99.9, y: 41.1 } },
  { id: 'nevada', name: 'Nevada', type: 'state', coordinates: { x: -117.0, y: 38.3 } },
  { id: 'new-hampshire', name: 'New Hampshire', type: 'state', coordinates: { x: -71.5, y: 43.4 } },
  { id: 'new-jersey', name: 'New Jersey', type: 'state', coordinates: { x: -74.5, y: 40.3 } },
  { id: 'new-mexico', name: 'New Mexico', type: 'state', coordinates: { x: -106.2, y: 34.8 } },
  { id: 'new-york', name: 'New York', type: 'state', coordinates: { x: -74.9, y: 42.2 } },
  { id: 'north-carolina', name: 'North Carolina', type: 'state', coordinates: { x: -79.8, y: 35.6 } },
  { id: 'north-dakota', name: 'North Dakota', type: 'state', coordinates: { x: -99.8, y: 47.5 } },
  { id: 'ohio', name: 'Ohio', type: 'state', coordinates: { x: -82.8, y: 40.4 } },
  { id: 'oklahoma', name: 'Oklahoma', type: 'state', coordinates: { x: -96.9, y: 35.5 } },
  { id: 'oregon', name: 'Oregon', type: 'state', coordinates: { x: -122.1, y: 44.6 } },
  { id: 'pennsylvania', name: 'Pennsylvania', type: 'state', coordinates: { x: -77.2, y: 40.3 } },
  { id: 'rhode-island', name: 'Rhode Island', type: 'state', coordinates: { x: -71.5, y: 41.7 } },
  { id: 'south-carolina', name: 'South Carolina', type: 'state', coordinates: { x: -80.9, y: 33.8 } },
  { id: 'south-dakota', name: 'South Dakota', type: 'state', coordinates: { x: -99.9, y: 44.3 } },
  { id: 'tennessee', name: 'Tennessee', type: 'state', coordinates: { x: -86.7, y: 35.7 } },
  { id: 'texas', name: 'Texas', type: 'state', coordinates: { x: -97.6, y: 31.1 } },
  { id: 'utah', name: 'Utah', type: 'state', coordinates: { x: -111.9, y: 40.2 } },
  { id: 'vermont', name: 'Vermont', type: 'state', coordinates: { x: -72.6, y: 44.0 } },
  { id: 'virginia', name: 'Virginia', type: 'state', coordinates: { x: -78.2, y: 37.8 } },
  { id: 'washington', name: 'Washington', type: 'state', coordinates: { x: -121.1, y: 47.4 } },
  { id: 'west-virginia', name: 'West Virginia', type: 'state', coordinates: { x: -80.9, y: 38.5 } },
  { id: 'wisconsin', name: 'Wisconsin', type: 'state', coordinates: { x: -90.0, y: 44.3 } },
  { id: 'wyoming', name: 'Wyoming', type: 'state', coordinates: { x: -107.3, y: 42.8 } },

  // Countries
  { id: 'canada', name: 'Canada', type: 'country', coordinates: { x: -106.3, y: 56.1 } },
  { id: 'mexico', name: 'Mexico', type: 'country', coordinates: { x: -102.5, y: 23.6 } },

  // Cities
  { id: 'washington-dc', name: 'Washington D.C.', type: 'city', coordinates: { x: -77.0, y: 38.9 } },
  { id: 'new-york-city', name: 'New York City', type: 'city', coordinates: { x: -74.0, y: 40.7 } },
  { id: 'philadelphia', name: 'Philadelphia', type: 'city', coordinates: { x: -75.2, y: 39.9 } },
  { id: 'boston', name: 'Boston', type: 'city', coordinates: { x: -71.1, y: 42.4 } },
  { id: 'charleston-sc', name: 'Charleston, S.C.', type: 'city', coordinates: { x: -79.9, y: 32.8 } },
  { id: 'chicago', name: 'Chicago', type: 'city', coordinates: { x: -87.6, y: 41.9 } },
  { id: 'austin-texas', name: 'Austin, Texas', type: 'city', coordinates: { x: -97.7, y: 30.3 } },
  { id: 'richmond', name: 'Richmond', type: 'city', coordinates: { x: -77.5, y: 37.5 } },
  { id: 'denver', name: 'Denver', type: 'city', coordinates: { x: -105.0, y: 39.7 } },

  // Bodies of Water
  { id: 'atlantic-ocean', name: 'Atlantic Ocean', type: 'ocean', coordinates: { x: -75.0, y: 35.0 } },
  { id: 'pacific-ocean', name: 'Pacific Ocean', type: 'ocean', coordinates: { x: -125.0, y: 40.0 } },
  { id: 'gulf-of-mexico', name: 'Gulf of Mexico', type: 'ocean', coordinates: { x: -90.0, y: 25.0 } },
  { id: 'chesapeake-bay', name: 'Chesapeake Bay', type: 'bay', coordinates: { x: -76.1, y: 38.3 } },

  // Great Lakes
  { id: 'lake-superior', name: 'Lake Superior', type: 'lake', coordinates: { x: -87.0, y: 47.7 } },
  { id: 'lake-michigan', name: 'Lake Michigan', type: 'lake', coordinates: { x: -87.0, y: 43.5 } },
  { id: 'lake-huron', name: 'Lake Huron', type: 'lake', coordinates: { x: -82.4, y: 44.8 } },
  { id: 'lake-erie', name: 'Lake Erie', type: 'lake', coordinates: { x: -81.2, y: 42.2 } },
  { id: 'lake-ontario', name: 'Lake Ontario', type: 'lake', coordinates: { x: -77.9, y: 43.7 } },

  // Rivers
  { id: 'hudson-river', name: 'Hudson River', type: 'river', coordinates: { x: -73.9, y: 42.7 } },
  { id: 'ohio-river', name: 'Ohio River', type: 'river', coordinates: { x: -84.8, y: 38.1 } },
  { id: 'mississippi-river', name: 'Mississippi River', type: 'river', coordinates: { x: -90.1, y: 38.6 } },
  { id: 'missouri-river', name: 'Missouri River', type: 'river', coordinates: { x: -96.8, y: 40.8 } },
  { id: 'red-river', name: 'Red River', type: 'river', coordinates: { x: -96.8, y: 33.9 } },
  { id: 'columbia-river', name: 'Columbia River', type: 'river', coordinates: { x: -121.2, y: 46.2 } },
  { id: 'colorado-river', name: 'Colorado River', type: 'river', coordinates: { x: -114.6, y: 36.1 } },
  { id: 'rio-grande-river', name: 'Rio Grande River', type: 'river', coordinates: { x: -106.5, y: 31.8 } },

  // Geographic Regions
  { id: 'great-basin', name: 'Great Basin', type: 'region', coordinates: { x: -117.0, y: 39.5 } },
  { id: 'great-plains', name: 'Great Plains', type: 'region', coordinates: { x: -101.0, y: 41.0 } },
  { id: 'florida-keys', name: 'Florida Keys', type: 'region', coordinates: { x: -80.9, y: 24.7 } },
  { id: 'long-island', name: 'Long Island', type: 'region', coordinates: { x: -73.0, y: 40.8 } },
  { id: 'cape-cod', name: 'Cape Cod', type: 'region', coordinates: { x: -70.0, y: 41.7 } },

  // Mountain Ranges
  { id: 'sierra-nevada', name: 'Sierra Nevada Mountains', type: 'mountain', coordinates: { x: -119.3, y: 37.7 } },
  { id: 'rocky-mountains', name: 'Rocky Mountains', type: 'mountain', coordinates: { x: -105.8, y: 40.0 } },

  // Coordinates
  { id: '49th-parallel', name: '49°N Latitude', type: 'coordinate', coordinates: { x: -100.0, y: 49.0 } }
];

export const examFeatures = geographyFeatures.filter(feature => 
  // All states
  feature.type === 'state' || 
  // Specific features mentioned in the exam
  [
    'great-basin', 'great-plains', 'canada', 'mexico', 'chesapeake-bay', 
    'atlantic-ocean', 'pacific-ocean', 'gulf-of-mexico', 'florida-keys', 
    'long-island', 'cape-cod', '49th-parallel', 'washington-dc', 
    'new-york-city', 'philadelphia', 'boston', 'charleston-sc', 'chicago', 
    'austin-texas', 'richmond', 'denver', 'hudson-river', 'ohio-river', 
    'mississippi-river', 'missouri-river', 'red-river', 'columbia-river', 
    'colorado-river', 'rio-grande-river', 'lake-superior', 'lake-michigan', 
    'lake-huron', 'lake-erie', 'lake-ontario', 'sierra-nevada', 'rocky-mountains'
  ].includes(feature.id)
);