export interface GeographicFeature {
  id: string;
  name: string;
  type: 'state' | 'city' | 'river' | 'lake' | 'ocean' | 'mountain' | 'region' | 'bay' | 'coordinate' | 'country';
  coordinates: {
    x: number;
    y: number;
  };
  description?: string;
}

export interface StudySession {
  score: number;
  totalQuestions: number;
  currentQuestion: number;
  timeStarted: Date;
  correctAnswers: string[];
  incorrectAnswers: string[];
}

export type StudyMode = 'study' | 'practice' | 'exam';