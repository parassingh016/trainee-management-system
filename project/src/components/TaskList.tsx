import React from 'react';
import { useStore } from '../store/useStore';
import { Clock, CheckCircle2, Circle, Timer } from 'lucide-react';
import { AddTaskForm } from './forms/AddTaskForm';
import { formatDate } from '../utils/helpers';

export function TaskList() {
  const { tasks, updateTaskStatus, trainees } = useStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Timer className="w-5 h-5 text-yellow-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getTraineeName = (traineeId: string) => {
    const trainee = trainees.find((t) => t.id === traineeId);
    return trainee ? trainee.name : 'Unassigned';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Tasks</h2>
        <AddTaskForm />
      </div>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-gray-600 mt-1">{task.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Due: {formatDate(task.dueDate)}</span>
                  <span className="mx-2">•</span>
                  <span>Assigned to: {getTraineeName(task.traineeId)}</span>
                </div>
              </div>
              <select
                value={task.status}
                onChange={(e) => updateTaskStatus(task.id, e.target.value as any)}
                className="ml-4 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="flex items-center mt-4">
              {getStatusIcon(task.status)}
              <span className="ml-2 text-sm capitalize">{task.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}