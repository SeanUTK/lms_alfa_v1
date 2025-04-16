export interface Class {
  id: string;
  name: string;
  subject: string;
  teacher: string;
  schedule: string;
  time: string;
  room: string;
  students: number;
  status: 'active' | 'inactive';
  color: string;
} 