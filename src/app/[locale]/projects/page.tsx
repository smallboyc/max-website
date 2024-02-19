import MainTitle from "@/components/common/MainTitle";
import TemplateProject from "@/components/projects/TemplateProject";
import { getData } from "@/lib/strapi";

export default async function Projects() {
  const { data } = await getData("projects?populate=image");
  const numberOfElement = (data: any) => {
    let count = 0;
    if (!data) return 0;
    data.map((el: any) => {
      count++;
    });
    return count;
  };
  
  return (
    <main className="my-16 sm:my-20 max-w-container fade-in">
      {" "}
      <MainTitle
        translationElement={"projects.main_title"}
        numberOfElement={numberOfElement(data)}
      />
      <section className="flex flex-col gap-8">
        {data &&
          data.map((project: any) => (
            <TemplateProject key={project.id} data={project} />
          ))}
      </section>
    </main>
  );
}
