"use client";
import { useState } from "react";
import type {Task} from "@/lib/tasks";
import TaskForm from "./TaskForm";

export default function TaskList({initialTasks  }: {initialTasks: Task[]}) {
    const [tasks, setTasks] = useState(initialTasks);
    const [filter,setFilter] = useState('all');
    const [selectedTaskId, setSelectedTaskId] =
    useState<number | null>(null);
    const [editingTaskId, setEditingTaskId] =
    useState<number | null>(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const handleTaskSubmit = (title: string, description: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };
    const toggleTaskCompletion = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    
    const showTaskDetails = (taskId: number) => {
        setSelectedTaskId((prevId) =>
            prevId === taskId ? null : taskId
        );
    };

    const startUpdateTask = (task: Task) => {
        setEditingTaskId(task.id);
        setEditTitle(task.title);
        setEditDescription(task.description);
    };

    const updateTask = (taskId: number) => {
        if (!editTitle.trim() || !editDescription.trim()) {
            return;
        }

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? {
                        ...task,
                        title: editTitle,
                        description: editDescription
                    }
                    : task
            )
        );

        setEditingTaskId(null);
    };



    const filterTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true; // 'all' filter
    });
    return (
        <div className="flex flex-col gap-4">
            <TaskForm onSubmit={handleTaskSubmit} />
           <button onClick={() => setFilter('all')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">All</button>
           <button onClick={() => setFilter('completed')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">Completed</button>
           <button onClick={() => setFilter('incomplete')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">Incomplete</button>
           <p className="text-gray-500">{tasks.filter(t=>t.completed).length} /[{tasks.length}] completed</p>
           
            {filterTasks.map((task) => (
                <div
                    key={task.id}
                    className="flex flex-col gap-3 border p-2 rounded"
                >
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                {task.title}
                            </h3>

                            <p className={`text-gray-700 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                {task.description}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => toggleTaskCompletion(task.id)}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                            >
                                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                            </button>

                            <button
                                onClick={() => deleteTask(task.id)}
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>

                            <button
                                onClick={() => showTaskDetails(task.id)}
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                Details
                            </button>

                            <button
                                onClick={() => startUpdateTask(task)}
                                className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
                            >
                                Update
                            </button>
                        </div>
                    </div>

                    {selectedTaskId === task.id && (
                        <div className="bg-gray-100 p-4 rounded">
                            <h3 className="font-bold mb-2">Task Details</h3>
                            <p>Id: {task.id}</p>
                            <p>Title: {task.title}</p>
                            <p>Description: {task.description}</p>
                            <p>
                                Status: {task.completed ? 'Completed' : 'Incomplete'}
                            </p>
                        </div>
                    )}

                    {editingTaskId === task.id && (
                        <div className="flex flex-col gap-3 bg-gray-100 p-4 rounded">
                            <h3 className="font-bold">Update Task</h3>

                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="border p-2 rounded"
                            />

                            <textarea
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                                className="border p-2 rounded"
                            />

                            <div className="flex gap-2">
                                <button
                                    onClick={() => updateTask(task.id)}
                                    className="bg-green-500 text-white p-2 rounded"
                                >
                                    Save
                                </button>

                                <button
                                    onClick={() => setEditingTaskId(null)}
                                    className="bg-gray-400 text-white p-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {filterTasks.length === 0 && <p className="text-gray-500">No tasks to display.</p>}
        </div>
    );
}
