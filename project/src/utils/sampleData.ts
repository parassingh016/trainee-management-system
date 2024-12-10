import { Trainee, Task, Course } from '../types';

export const sampleCourses: Course[] = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Full-stack web development bootcamp',
    duration: '12 weeks',
    modules: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database'],
  },
  {
    id: '2',
    name: 'Data Science',
    description: 'Comprehensive data science program',
    duration: '16 weeks',
    modules: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
  },
];

export const sampleTrainees: Trainee[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    course: 'Web Development',
    progress: 65,
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    course: 'Data Science',
    progress: 45,
    joinedAt: new Date('2024-02-01'),
  },
];

export const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Complete React Project',
    description: 'Build a full-stack application using React and Node.js',
    dueDate: new Date('2024-04-15'),
    status: 'in-progress',
    traineeId: '1',
  },
  {
    id: '2',
    title: 'Python Data Analysis',
    description: 'Analyze dataset using pandas and numpy',
    dueDate: new Date('2024-04-20'),
    status: 'pending',
    traineeId: '2',
  },
];