"use client"

import { useState } from "react"
import type { SubmitEvent } from "react"
type Props = {
    onSubmit: (title: string, description: string) => void
}

export default function TaskForm({ onSubmit }: Props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Create Task
            </button>
        </form>
    );
}
