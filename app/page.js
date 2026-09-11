import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">Wallace Ip</h1>
      <Link href="https://github.com/wallaceip/cprg306-assignments" className="text-underline hover:text-blue-400">GitHub Repo</Link>
    </main>
  );
}