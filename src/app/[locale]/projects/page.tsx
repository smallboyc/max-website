import MainTitle from "@/components/common/MainTitle";
import TemplateProject from "@/components/projects/TemplateProject";
import { getData } from "@/lib/strapi";

export default async function Projects() {
  const { data } = await getData("projects?populate=image");
  return (
    <main className="my-16 sm:my-20 max-w-container">
      {" "}
      <MainTitle translationElement={"projects.main_title"} />
      <section className="flex flex-col gap-8">
        {data.map((project: any) => (
          <TemplateProject key={project.id} data={project} />
        ))}
      </section>
    </main>
  );
}
