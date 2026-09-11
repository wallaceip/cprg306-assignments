import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">CPRG 306: Web Development 2 - Assignments </h1>
      <Link href="/week-2" className="hover:text-blue-400">Week 2 Assignment</Link>
    </main>
  );
}