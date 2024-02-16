import { FaLanguage } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function ToggleLanguage({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const clean_path = pathname.split("/").filter((el) => el != "");

  const redirection = (value: any) => {
    const new_path = clean_path.filter((el) => el != locale).join("/");
    if (value.length != 1) {
      if (locale == "en") router.replace(`/fr/${new_path}`, { scroll: false });
      else router.replace(`/en/${new_path}`, { scroll: false });
    } else {
      if (locale == "en") router.replace(`/fr`, { scroll: false });
      else router.replace(`/en`, { scroll: false });
    }
  };
  return (
    <button onClick={() => redirection(clean_path)}>
      <FaLanguage className={`block size-7 -translate-x-4 sm:translate-x-0`} />
    </button>
  );
}
