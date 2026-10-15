export interface DisasterScenario {
  id: string;
  name: string;
  type: 'flood' | 'cyclone' | 'wildfire' | 'drought';
  location: string;
  coordinates: string;
  severityLevel: 'High' | 'Severe' | 'Critical';
  affectedPopulationEstimate: string;
  satelliteBands: string[];
  keyRiskIndicator: string;
  summary: string;
  hotspots: {
    id: string;
    label: string;
    x: number; // percentage
    y: number; // percentage
    details: string;
    evacuationPriority: 'Immediate' | 'Standby' | 'Advisory';
  }[];
  mitigationRecommendation: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface StakeholderItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyNeeds: string[];
  platformValue: string;
}

export interface ImpactItem {
  title: string;
  description: string;
  focusArea: string;
}

export interface DemoFormData {
  fullName: string;
  organization: string;
  email: string;
  stakeholderType: string;
  message: string;
}
