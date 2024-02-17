"use client";
import { useTranslations } from "next-intl";
export default function MainTitle({ translationElement }: any) {
  const t = useTranslations(translationElement);
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="text-slate-600 sm:text-lg">{t("description")}</p>
    </div>
  );
}
