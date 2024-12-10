export interface Trainee {
  id: string;
  name: string;
  email: string;
  course: string;
  progress: number;
  joinedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  traineeId: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  modules: string[];
}