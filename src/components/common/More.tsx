import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function More() {
  const t = useTranslations("home.more");
  return (
    <section className="mt-10 text-slate-600">
      <span className="flex gap-1 items-center">
        <FaArrowRight className="mr-1"/> {t("content")}
        <Link href="/pdf/CV-Maxence_Dupuis.pdf">
          <p className="text-black font-semibold">curriculum vitae.</p>
        </Link>
      </span>
    </section>
  );
}
