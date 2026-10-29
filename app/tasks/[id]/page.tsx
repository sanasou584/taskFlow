import { initialTasks } from "@/lib/tasks";
import Link from "next/link";
import { notFound } from "next/navigation";


export default function TaskDetails({ params }: { params: { id: string } }) {
    const taskId = parseInt(params.id, 10);
    const task = initialTasks.find((task) => task.id === taskId);

    if (!task) {
        notFound();
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold mb-4">{task.title}</h1>
            <p className="text-lg mb-8">{task.description}</p>
            <Link href="/tasks" className="text-blue-500 hover:underline">
                Back to Task List
            </Link>
        </section>
    );
}