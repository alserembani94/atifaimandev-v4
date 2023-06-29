import Link from "next/link";
import Image from "next/image";
import { Dict, Locale } from "../utils/i18n-config";

const Header = ({ dict, lang }: { dict: Dict; lang: Locale }) => {
  return (
    <header className="w-full flex justify-center px-4 sticky top-0 bg-[rgb(var(--background-rgb) / 0.5)] backdrop-blur-sm">
      <nav className="w-full max-w-screen-lg border-b border-opacity-40 dark:border-opacity-40 border-slate-300 dark:border-slate-800 flex gap-4">
        <Link href={`/${lang}/`} className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="atifaimandev"
            width={160}
            height={15}
          />
        </Link>
        <Link
          href={`/${lang}/tech-deck`}
          className="px-2 py-4 hover:text-slate-500 transition-colors duration-200 ease-in-out"
        >
          {dict.nav.tech_deck}
        </Link>
        <Link
          href={`/${lang}/experiences`}
          className="px-2 py-4 hover:text-slate-500 transition-colors duration-200 ease-in-out"
        >
          {dict.nav.experiences}
        </Link>
        <Link
          href={`/${lang}/projects`}
          className="px-2 py-4 hover:text-slate-500 transition-colors duration-200 ease-in-out"
        >
          {dict.nav.experiences}
        </Link>
        <Link
          href={`/${lang}/fun-stuff`}
          className="px-2 py-4 hover:text-slate-500 transition-colors duration-200 ease-in-out mr-auto"
        >
          {dict.nav.fun_stuff}
        </Link>
        <Link
          href="/twitter"
          className="px-2 py-4 hover:text-slate-500 transition-colors duration-200 ease-in-out"
        >
          Twitter
        </Link>
      </nav>
    </header>
  );
};

export default Header;
