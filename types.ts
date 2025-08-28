
export interface NavItemType {
  name: string;
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface BaseResource {
  id: string;
  title: string;
  summary: string;
  category?: string; // e.g., Industry for cases, Type for frameworks
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  content: string; // Full content, can be Markdown
  estimatedTime?: string; // e.g., "Est. 45 Mins"
  rating?: number; // e.g., 4 (out of 5)
}

export interface CaseStudy extends BaseResource {
  industry: string;
}

export interface Framework extends BaseResource {
  type: string; // e.g., Strategic, Operational
}

export interface PracticeScenario extends BaseResource {
  objective: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isLoading?: boolean;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web: GroundingChunkWeb;
}
export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}

// Types for My Progress Page
export interface ScoreTrendPoint {
  date: string; // e.g., "2024-05-01"
  score: number; // e.g., 75
}

export interface SkillDataItem {
  skill: string; // e.g., "Structure & Logic"
  score: number; // Percentage, e.g., 85
}

export interface SessionHistoryItem {
  id: string;
  date: string; // e.g., "2024-05-28"
  caseTitle: string;
  score: number; // Percentage
  type: 'case' | 'practice'; // To link to the correct view page
  resourceId: string; // ID of the case or practice scenario
}

// Type for Strategy Videos Page
export interface VideoItem {
  id: string;
  title: string;
  uploader: string; // e.g., "Consulting Masters Inc." or YouTube channel name
  thumbnailUrl?: string; // Optional: URL for a custom thumbnail
  youtubeVideoId: string; // YouTube video ID for embedding
  description: string;
}