"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const links = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
];

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("home.navigation");
  return (
    <>
      {links.map((link) => (
        <li
          key={link.label}
          className="px-4 py-2 text-sm hover:text-primary text-slate-600"
        >
          <Link href={`/${locale}${link.href}`}>{t(link.label)}</Link>
        </li>
      ))}
    </>
  );
}
