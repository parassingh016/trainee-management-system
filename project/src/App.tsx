import React from 'react';
import { Dashboard } from './components/Dashboard';
import { TraineeList } from './components/TraineeList';
import { TaskList } from './components/TaskList';
import { Layout } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Trainee Management System
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Dashboard />
        <div className="mt-8">
          <TraineeList />
        </div>
        <div className="mt-8">
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default App;