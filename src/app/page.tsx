import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Education from "@/components/Education";
import Links from "@/components/Links";
export default function Home() {
  return (
    <main className="my-16 sm:my-20 flex flex-col gap-20 max-w-container">
      <Hero />
      <Tools />
      <Education />
      <Links />
    </main>
  );
}
