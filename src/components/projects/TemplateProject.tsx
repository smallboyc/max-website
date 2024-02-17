"use client";
import Image from "next/image";
import Link from "next/link";

const displayDate = (date: string) => {
  return date.split("-").reverse().join(" / ");
};
export default function TemplateProject({ data }: any) {
  displayDate(data.attributes.date);
  return (
    <section className="mt-10 flex flex-col md:flex-row gap-2 md:gap-10">
      <Link
        href={data.attributes.href}
        className="w-full md:w-2/5 aspect-video overflow-clip relative"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.image.data.attributes.url}`}
          alt={data.attributes.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl w-full h-full hover:opacity-95 duration-200 ease-in"
        />
      </Link>
      <div className="flex flex-col justify-around">
        <span className="flex flex-col ">
          <h1 className="text-2xl font-bold">{data.attributes.title}</h1>
          <p className="text-slate-600 hover:text-black">
            {data.attributes.description}
          </p>
        </span>
        <p className="text-slate-600 hover:text-black">
          {displayDate(data.attributes.date)}
        </p>
      </div>
    </section>
  );
}
