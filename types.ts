import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProblemItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionItem {
  id: number;
  title: string;
  description: string;
  benefit: string;
}

export interface ProductCoreItem {
  id: number;
  title: string;
  description: string;
}