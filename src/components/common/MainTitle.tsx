import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa6";
import Nothing from "./Nothing";
export default function MainTitle({
  translationElement,
  numberOfElement,
}: any) {
  const t = useTranslations(translationElement);
  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <span className="flex gap-2 items-center">
        <FaArrowRight />

        {numberOfElement != 0 ? (
          <span className="text-slate-600 sm:text-lg flex gap-1">
            <p>{numberOfElement}</p>

            {numberOfElement == 1
              ? t("description_singular")
              : t("description_plural")}
          </span>
        ) : (
          <span>{t("no_item")} </span>
        )}
      </span>
      {numberOfElement == 0 && (
        <div className="mt-10">
          <Nothing />
        </div>
      )}
    </div>
  );
}
