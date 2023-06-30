import { getDictionary } from "../../utils/get-dictionary";
import { Locale } from "../../utils/i18n-config";
import Image from "next/image";
import { IoBuild } from "react-icons/io5";
import CenterContainer from "@components/molecule/CenterContainer";
import { featuredTech } from "../../data/tech-deck";

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
        sectionClassName="bg-gradient-to-b from-slate-950 via-[#070d2b] to-slate-950"
        divClassName="grid grid-cols-3 gap-4"
      >
        <div className="bg-slate-900 bg-opacity-30 rounded-lg border border-slate-900 backdrop-blur-md p-8 col-span-3">
          <h6 className="-mb-2">Salam and hello everyone!</h6>
          <h1>My name is Atif Aiman</h1>
          <h4>
            and I am a{" "}
            <span className="bg-slate-800 px-2 py-1 rounded-lg">
              pixel-perfect frontend developer ✨
            </span>
          </h4>
        </div>
        <div className="bg-slate-900 bg-opacity-30 rounded-lg border border-slate-900 backdrop-blur-md p-8 col-span-2 h-[200px] flex flex-col justify-end">
          <div className="flex gap-4 text-slate-500 text-2xl">
            {featuredTech.map((tool) => tool.icon)}
          </div>
          <h3>Check out my tech deck!</h3>
        </div>
      </CenterContainer>
    </>
  );
}
