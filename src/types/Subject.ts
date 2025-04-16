export interface Subject {
  id: string;
  name: string;
  code: string;
  department: string;
  credits: number;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
} 