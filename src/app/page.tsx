import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
export default function Home() {
  return (
    <main className="my-16 sm:my-20 flex flex-col gap-20">
      <Hero />
      <Tools />
    </main>
  );
}
