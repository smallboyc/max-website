import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const links = [
  { name: "Mail", icon: IoMailOutline, href: "mailto:maxencedup44@gmail.com" },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UC-6FwEz-k6JZ7pU-Y0sWClA",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/smallboyc_/",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/maxence-dupuis-19559025a/",
  },
  { name: "GitHube", icon: FaGithub, href: "https://github.com/smallboyc" },
];

export default function Links() {
  const t = useTranslations("home.links");
  return (
    <section className="mt-20 mb-5 sm:mb-10 sm:mt-24 flex flex-col max-w-container">
      {" "}
      <h1 className="text-2xl font-medium">{t("title")}</h1>{" "}
      <ul className="flex items-center gap-5 mt-5 ">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              {" "}
              <link.icon className="size-6 text-slate-600 hover:text-black" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
