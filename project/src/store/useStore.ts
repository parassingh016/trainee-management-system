import { create } from 'zustand';
import { Trainee, Task, Course } from '../types';
import { sampleTrainees, sampleTasks, sampleCourses } from '../utils/sampleData';

interface Store {
  trainees: Trainee[];
  tasks: Task[];
  courses: Course[];
  addTrainee: (trainee: Trainee) => void;
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: string, status: Task['status']) => void;
  updateTraineeProgress: (traineeId: string, progress: number) => void;
}

export const useStore = create<Store>((set) => ({
  trainees: sampleTrainees,
  tasks: sampleTasks,
  courses: sampleCourses,
  addTrainee: (trainee) =>
    set((state) => ({ trainees: [...state.trainees, trainee] })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      ),
    })),
  updateTraineeProgress: (traineeId, progress) =>
    set((state) => ({
      trainees: state.trainees.map((trainee) =>
        trainee.id === traineeId ? { ...trainee, progress } : trainee
      ),
    })),
}));