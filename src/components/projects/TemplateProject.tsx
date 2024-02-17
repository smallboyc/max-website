"use client";
import Image from "next/image";
export default function TemplateProject({ data }: any) {
  console.log(data[0].attributes.image.data.attributes.url);
  return (
    <section className="mt-10 flex gap-10">
      {/* We get data bb */}
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data[0].attributes.image.data.attributes.url}`}
        width={300}
        height={300}
        alt={data[0].attributes.title}
        className="rounded-xl"
      />
      <h1 className="text-2xl font-bold">{data[0].attributes.title}</h1>
    </section>
  );
}
