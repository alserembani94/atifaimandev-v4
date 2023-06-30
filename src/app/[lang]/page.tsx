import { getDictionary } from "../../utils/get-dictionary";
import { Locale } from "../../../i18n-config";
import Image from "next/image";
import { IoBuild, IoArrowForwardCircle } from "react-icons/io5";
import CenterContainer from "@components/molecule/CenterContainer";
import { featuredTech } from "../../data/tech-deck";
import Link from "next/link";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  if (process.env.NODE_ENV === "production") {
    return (
      <>
        <section className="flex flex-col gap-8 items-center justify-center flex-1">
          <Image
            src="/images/maintenance.png"
            alt="Under construction"
            width={800}
            height={253}
          />
          <div className="flex flex-col gap-4 bg-slate-700 bg-opacity-30 backdrop-blur-md border border-slate-950 rounded-md p-4 max-w-lg text-center items-center">
            <h1>{dict.nav.home}</h1>
            <div className="flex bg-yellow-800 px-4 py-2 rounded-lg font-bold items-center gap-2 justify-center">
              <IoBuild />
              <p>{dict.maintenance.under_construction}</p>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: dict.maintenance.build_pixels,
              }}
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <CenterContainer
        sectionClassName="bg-gradient-to-b from-slate-200 dark:from-slate-950 via-[#cfd8e6] dark:via-[#070d2b] to-slate-200 dark:to-slate-950"
        divClassName="grid grid-cols-3 gap-4"
      >
        <div className="bg-slate-300 dark:bg-slate-800 bg-opacity-30 rounded-lg border border-opacity-30 border-slate-400 dark:border-slate-900 backdrop-blur-md p-8 col-span-3 h-[300px] flex flex-col justify-end">
          <h6 className="-mb-2">{dict.home.welcome}</h6>
          <h1>{dict.home.intro}</h1>
          <h4>
            {dict.home.and_i}
            <span className="bg-slate-400 dark:bg-slate-900 px-2 py-1 rounded-lg">
              {dict.home.pixel_perfect}
            </span>
          </h4>
        </div>
        <Link
          href={`/${lang}/tech-deck`}
          className="bg-slate-300 dark:bg-slate-800 bg-opacity-30 rounded-lg border border-opacity-30 border-slate-400 dark:border-slate-900 backdrop-blur-md p-8 col-span-2 h-[200px] flex flex-col justify-end group"
        >
          <div className="flex gap-4 text-slate-500 text-2xl">
            {featuredTech.map((tool) => tool.icon)}
          </div>
          <h3 className="flex items-center gap-2">
            {dict.home.tech_deck}{" "}
            <IoArrowForwardCircle className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-2" />
          </h3>
        </Link>
        <Link
          href={`/${lang}/blogs`}
          className="bg-slate-300 dark:bg-slate-800 bg-opacity-30 rounded-lg border border-opacity-30 border-slate-400 dark:border-slate-900 backdrop-blur-md p-8 h-[200px] flex flex-col justify-end group"
        >
          <h3>
            {dict.home.read_blog}{" "}
            <IoArrowForwardCircle className="text-slate-500 group-hover:text-white transition-all group-hover:translate-x-2" />
          </h3>
        </Link>
      </CenterContainer>
    </>
  );
}
