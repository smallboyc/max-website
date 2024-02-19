import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Education from "@/components/Education";
export default function Home() {
  return (
    <main className="mt-16 mb-10 sm:mt-20 flex flex-col gap-20 sm:gap-24 max-w-container fade-in">
      <Hero />
      <Tools />
      <Education />
    </main>
  );
}
