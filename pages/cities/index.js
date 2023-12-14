import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <div>
      <main>
        <Link href="/">Go back Home</Link>
        <h1>Cities</h1>
        <ul>
          {cities.map(({ id, name, slug }) => (
            <li key={id}>
              <Link href={`/cities/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
