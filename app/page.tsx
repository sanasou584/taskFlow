import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to TaskFlow</h1>
      <p className="text-lg mb-8">A simple task management app built with Next.js and TypeScript.</p>
      <Link href="/tasks/" className="text-blue-500 hover:underline">
        Start Managing Your Tasks
      </Link>
    </section>
  );
}
