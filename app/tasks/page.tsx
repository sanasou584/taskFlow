import TaskList from "@/components/TaskList";
import { initialTasks } from "@/lib/tasks";


export default function TasksPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Task List</h1>
      <TaskList initialTasks={initialTasks} />
    </section>
  );
}