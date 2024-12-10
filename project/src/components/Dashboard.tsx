import React from 'react';
import { useStore } from '../store/useStore';
import { BarChart, Users, BookOpen, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const { trainees, tasks } = useStore();

  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const averageProgress = trainees.reduce((acc, curr) => acc + curr.progress, 0) / trainees.length || 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Trainees"
          value={trainees.length}
          icon={<Users className="w-6 h-6" />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Active Tasks"
          value={tasks.length}
          icon={<BookOpen className="w-6 h-6" />}
          color="bg-green-500"
        />
        <DashboardCard
          title="Completed Tasks"
          value={completedTasks}
          icon={<CheckCircle className="w-6 h-6" />}
          color="bg-purple-500"
        />
        <DashboardCard
          title="Average Progress"
          value={`${Math.round(averageProgress)}%`}
          icon={<BarChart className="w-6 h-6" />}
          color="bg-orange-500"
        />
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

function DashboardCard({ title, value, icon, color }: DashboardCardProps) {
  return (
    <div className={`${color} rounded-lg p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
}