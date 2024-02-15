import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  return (
    <>
      {links.map((link) => (
        <li
          key={link.label}
          className="px-4 py-2 text-sm hover:text-primary text-slate-600"
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  );
}
