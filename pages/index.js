import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <main>
        <h1>Cities of the World</h1>
        <Link href="/cities">Go to all cities</Link>
      </main>
    </div>
  );
}
