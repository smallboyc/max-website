import { IoMailOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { link } from "fs";

const links = [
  { name: "Mail", icon: IoMailOutline },
  { name: "YouTube", icon: FaYoutube },
  { name: "Instagram", icon: FaInstagram },
  { name: "Linkedin", icon: FaLinkedin },
  { name: "XTwitter", icon: FaXTwitter },
];

export default function Links() {
  return (
    <section>
      {" "}
      <h1 className="text-2xl">Links</h1>{" "}
      <ul className="flex items-center gap-5 mt-5 ">
        {links.map((link) => (
          <li key={link.name}>
            <link.icon className="size-6 text-slate-600 hover:text-black" />
          </li>
        ))}
      </ul>
    </section>
  );
}
