"use client"

export default function Error ({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
            <p className="text-lg mb-8">{error.message}</p>
            <button onClick={reset} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Try Again
            </button>
        </div>
    )
}