import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css"; 

export const metadata = {
  title: "TaskFlow",
  description: "A simple task management app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b p-5">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-gray-900 hover:text-blue-500">
              TaskFlow
            </Link>
            <Link href="/tasks/new" className="text-gray-900 hover:text-blue-500">
              New Task
            </Link>
            <Link href="/tasks" className="text-gray-900 hover:text-blue-500">
              View Tasks
            </Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}