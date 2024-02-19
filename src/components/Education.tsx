import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const educations = [
  {
    name: "ESIEE",
    link: "https://www.esiee.fr/formations/ingenieur/filieres/imac",
    src: "/images/esiee-paris.png",
    width: 160,
    height: 100,
    time: "2023 - 2026",
    description: "esiee",
    margin: true,
  },
  {
    name: "Nantes University",
    link: "https://www.univ-nantes.fr/",
    src: "/images/univ-nantes.png",
    width: 180,
    height: 100,
    time: "2020 - 2023",
    description: "nantes",
    margin: false,
  },
  {
    name: "Anywwwhere",
    link: "https://anywwwhere.com/",
    src: "/images/anywwwhere.svg",
    width: 160,
    height: 100,
    time: "2023 - ?",
    description: "anywwwhere",
    margin: true,
  },
  {
    name: "Le S Shoes & Style",
    link: "https://www.facebook.com/lesshoesandstyle/",
    src: "/images/s-shoes.png",
    width: 160,
    height: 100,
    time: "2023 - ?",
    description: "s_shoes",
    margin: true,
  },
];

export default function Education() {
  const t = useTranslations("home.education");
  return (
    <section>
      <h1 className="text-2xl font-medium">{t("title")}</h1>{" "}
      <div className="mt-12 sm:mt-14 flex flex-col gap-16 sm:gap-20">
        {educations.map((education) => (
          <div
            key={education.name}
            className="flex flex-col sm:flex-row gap-4 sm:gap-10"
          >
            {" "}
            <Link
              href={education.link}
              className={classNames(
                education.margin ? "ml-3" : "",
                "flex flex-col justify-center"
              )}
            >
              <Image
                src={education.src}
                width={education.width}
                height={education.height}
                alt={`${education.name} Logo`}
              />
            </Link>
            <span
              className={classNames(
                education.margin ? "sm:ml-2" : "sm:ml-0 ",
                "flex flex-col sm:gap-2 ml-3"
              )}
            >
              <p className="text-lg">{education.time}</p>
              <p className="text-slate-600 hover:text-black">
                {t(education.description)}
              </p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
