import Link from "next/link";
import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Detailpage() {
  const router = useRouter();
  const { slug } = router.query;

  const citiesDetails = cities.find((city) => city.slug === slug);
  if (!citiesDetails) {
    return null;
  }

  const { name, country, population, description } = citiesDetails;

  return (
    <div>
      <main>
        <Link href="/cities">Back to all cities</Link>
        <h1>{name}</h1>
        <p>{description}</p>
        <Image
          src={"/images/" + slug + ".jpeg"}
          alt={`Picture of ${name}`}
          width={400}
          height={230}
        />
        <section>
          <h2>More information about the city:</h2>
          <p>
            {name} is the capital of {country} with a population of {population}{" "}
            people.
          </p>
        </section>
      </main>
    </div>
  );
}
