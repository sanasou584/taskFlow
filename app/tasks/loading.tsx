"use client";

export default function Loading(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold mb-4">Loading...</h1>
            <p className="text-lg mb-8">Please wait while we load your tasks.</p>
        </div>
    )
}