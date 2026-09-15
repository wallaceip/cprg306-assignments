import Link from "next/link";

export default function BackHome() {
    return (
        <main>
            <Link href="/" className="hover:text-amber-300">Go Back to Home</Link>
        </main>
    );
}