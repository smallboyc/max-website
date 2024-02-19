"use client";
import Image from "next/image";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaArrowRight, FaFlag } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations("home.hero");
  return (
    <section className="flex flex-col">
      <h1 className="font-bold text-2xl ">Maxence Dupuis</h1>
      <p className="text-slate-600 sm:text-lg">{t("basically")}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 mt-2">
        <Image
          src="/images/pp.jpg"
          alt="Photo de profile"
          width={120}
          height={120}
          className="rounded-full my-3"
        />
        <ul className="text-slate-600 sm:text-lg flex flex-col mt-3">
          <li className="flex gap-2 items-center mb-2 hover:text-black">
            <LiaBirthdayCakeSolid className="size-5" />
            <span>21 {t("yo")}</span>
          </li>
          <li className="flex gap-2 items-center mb-2 hover:text-black ">
            <FaFlag className="size-3 mx-1" />
            <span>{t("nationality")}</span>
          </li>
          <li className="flex gap-2 items-center mb-2 hover:text-black">
            <LuGraduationCap className="size-5" />
            <span>{t("status")}</span>
          </li>
        </ul>
      </div>
      <div className="text-slate-600 mt-6 sm:mt-2 sm:text-lg">
        <p>{t("desc_1")}</p>
        <p>{t("desc_2")}</p>
        <p>{t("desc_3")} </p>
        <p>{t("desc_4")}</p>
      </div>
      <span className="mt-2 flex gap-1 items-center text-slate-600 hover:text-black w-fit">
        <FaArrowRight className="mr-1" />
        <Link href={`/${locale}/projects`}>{t("go_to_project")}</Link>
      </span>
    </section>
  );
}
