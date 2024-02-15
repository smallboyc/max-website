import { SiBlender } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const tools = [
  { id: 0, icon: SiBlender, name: "Blender", href: "https://www.blender.org/" },
  { id: 1, icon: SiUnity, name: "Unity", href: "https://unity.com/" },
  { id: 2, icon: SiNotion, name: "Notion", href: "https://www.notion.so/" },
  {
    id: 3,
    icon: SiAdobecreativecloud,
    name: "Adobe CC",
    href: "https://www.adobe.com/",
  },
  {
    id: 4,
    icon: SiVisualstudiocode,
    name: "VS Code",
    href: "https://code.visualstudio.com/",
  },
  { id: 5, icon: SiGithub, name: "GitHub", href: "https://github.com/" },
];

export default function Tools() {
  return (
    <section>
      {" "}
      <h1 className="text-2xl">I use</h1>
      <div className="mt-5 grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4">
        {tools.map((tool) => (
          <Link
            href={tool.href}
            key={tool.id}
            className="flex gap-4 items-center text-slate-600 justify-between hover:text-black border-2 border-slate-500 hover:border-black max-w-52 w-full p-2 rounded-xl"
          >
            <tool.icon className="size-10" />
            <span>{tool.name}</span>
            <MdArrowOutward className="size-6" />
          </Link>
        ))}
      </div>
      <p className="mt-6 text-slate-600">
        More details on my{" "}
        <span className="text-black font-bold">curiculum vitae.</span>
      </p>
    </section>
  );
}
