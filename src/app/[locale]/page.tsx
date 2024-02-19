import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Education from "@/components/Education";
import { notFound } from "next/navigation";
export default async function Home({ params }: { params: { locale: string } }) {
  let messages;
  const { locale } = params;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <main className="mt-16 mb-10 sm:mt-20 flex flex-col gap-20 sm:gap-24 max-w-container fade-in">
      <Hero locale={locale} />
      <Tools />
      <Education />
    </main>
  );
}
